<template>
  <div class="app-container">
    <h1 class="hlavni-nadpis">Maturitní trenažér</h1>

    <div v-if="stavAplikace === 'menu'">
      <p>Vyber si předmět a začni se učit produktivně!</p>
      <div class="tlacitka-grid">
        <button class="btn" @click="vyberPredmet('elektronika', 'Elektronika (25)')">Elektronika</button>
        <button class="btn" @click="vyberPredmet('epo', 'EPO (12)')">EPO</button>
        <button class="btn" @click="vyberPredmet('programovani', 'Programování + MPT (13)')">Programování + MPT</button>
        <button class="btn" @click="vyberPredmet('cestina', 'Čeština (20)')">Čeština</button>
      </div>
    </div>

    <div v-if="stavAplikace === 'seznamOkruhu'">
      <button class="btn-zpet" @click="stavAplikace = 'menu'">⬅ Zpět na předměty (ESC)</button>
      <h2>Předmět: {{ nazevVybranehoPredmetu }}</h2>
      
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPredmetu + '%' }"></div>
        </div>
        <span class="progress-text">Úroveň zvládnutí předmětu: {{ progressPredmetu }} %</span>
      </div>

      <div v-if="seznamOtazek.length === 0" class="upozorneni">
        Zatím zde nejsou žádné vypracované otázky.
      </div>

      <div class="tlacitka-grid">
        <button 
          v-for="okruh in seznamOtazek" 
          :key="okruh.id" 
          class="btn btn-okruh"
          :class="{ 'hotovo': jeOkruhHotovy(okruh.id) }"
          @click="vyberOkruh(okruh)"
        >
          <span v-if="jeOkruhHotovy(okruh.id)">✅ </span>
          {{ okruh.nazev }}
        </button>
      </div>
    </div>

    <div v-if="stavAplikace === 'detailOkruhu'" class="sekce-detail">
      <button class="btn-zpet" @click="stavAplikace = 'seznamOkruhu'">⬅ Zpět na seznam (ESC)</button>
      <h2>{{ vybranyOkruh.nazev }}</h2>
      
      <div v-if="jeOkruhHotovy(vybranyOkruh.id)" class="oznameni-hotovo">
        🏆 Tento okruh už máš perfektně zvládnutý!
      </div>

      <div class="teorie-box">
        <p>{{ vybranyOkruh.teorie }}</p>
      </div>
      <button class="btn btn-akce" @click="spustitKviz">▶ Spustit kvíz k této otázce</button>
    </div>

    <div v-if="stavAplikace === 'kviz'" class="sekce-kviz">
      <button class="btn-zpet" @click="stavAplikace = 'detailOkruhu'">⬅ Opustit kvíz (ESC)</button>
      
      <div class="progress-container kviz-progress">
        <div class="progress-bar">
          <div class="progress-fill kviz-fill" :style="{ width: progressKvizu + '%' }"></div>
        </div>
      </div>

      <div class="kviz-hlavicka">
        <span>Otázka {{ indexAktualniOtazky + 1 }} z {{ vybranyOkruh.kviz.length }}</span>
        <span>Skóre: {{ skore }}</span>
      </div>

      <h3 class="otazka-text">{{ aktualniKvizOtazka.otazka }}</h3>

      <div class="moznosti-grid">
        <button 
          v-for="(moznost, index) in aktualniKvizOtazka.moznosti" 
          :key="index"
          class="btn btn-moznost"
          :class="tridaProMoznost(index)"
          :disabled="odpovezeno"
          @click="zkontrolujOdpoved(index)"
        >
          {{ moznost }}
        </button>
      </div>

      <button v-if="odpovezeno" class="btn btn-akce dalsi-btn" @click="dalsiOtazka">
        {{ (indexAktualniOtazky + 1 === vybranyOkruh.kviz.length) ? 'Zobrazit výsledky' : 'Další otázka ➡' }}
      </button>
    </div>

    <div v-if="stavAplikace === 'vysledky'" class="sekce-vysledky">
      <h2>Kvíz dokončen!</h2>
      <p class="skore-text">Tvoje skóre: <strong>{{ skore }} / {{ vybranyOkruh.kviz.length }}</strong></p>
      
      <p v-if="skore === vybranyOkruh.kviz.length" class="uspech-text">
        Dokonalé! Okruh je zapsán jako splněný. 🎯
      </p>
      <p v-else class="neuspech-text">
        Pro splnění okruhu musíš mít všechno správně. Zkus to znovu! 💪
      </p>
      
      <div class="tlacitka-vedle-sebe">
        <button class="btn" @click="spustitKviz">🔄 Opakovat kvíz</button>
        <button class="btn" @click="stavAplikace = 'seznamOkruhu'">📄 Zpět na seznam</button>
      </div>
    </div>

  </div> 
</template>

<script>
import { maturitniData } from './data.js';
import { programovaniData } from './dataProgramovani.js';
import { cestinaData } from './dataCestina.js';
import { epoData } from './dataEpo.js';

export default {
  data() {
    return {
      dataUvnitrAplikace: {
        elektronika: maturitniData.elektronika,
        programovani: programovaniData,
        cestina: cestinaData,
        epo: epoData
      },
      dokonceneOkruhy: {
        elektronika: [],
        programovani: [],
        cestina: [],
        epo: []
      },
      stavAplikace: 'menu',
      klicPredmetu: '',
      nazevVybranehoPredmetu: '',
      vybranyOkruh: null,
      indexAktualniOtazky: 0,
      skore: 0,
      odpovezeno: false,
      zvolenyIndex: null
    };
  },
  computed: {
    seznamOtazek() {
      return this.dataUvnitrAplikace[this.klicPredmetu] || [];
    },
    aktualniKvizOtazka() {
      if (!this.vybranyOkruh || !this.vybranyOkruh.kviz) return null;
      return this.vybranyOkruh.kviz[this.indexAktualniOtazky];
    },
    progressPredmetu() {
      if (!this.klicPredmetu || this.seznamOtazek.length === 0) return 0;
      const pocetHotovych = this.dokonceneOkruhy[this.klicPredmetu].length;
      const celkem = this.seznamOtazek.length;
      return Math.round((pocetHotovych / celkem) * 100);
    },
    progressKvizu() {
      if (!this.vybranyOkruh || !this.vybranyOkruh.kviz.length) return 0;
      return Math.round((this.indexAktualniOtazky / this.vybranyOkruh.kviz.length) * 100);
    }
  },
  mounted() {
    window.addEventListener('keydown', this.krokZpet);
  },
  unmounted() {
    window.removeEventListener('keydown', this.krokZpet);
  },
  methods: {
    zamichejPole(pole) {
      let zamichane = [...pole]; 
      for (let i = zamichane.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [zamichane[i], zamichane[j]] = [zamichane[j], zamichane[i]];
      }
      return zamichane;
    },
    krokZpet(event) {
      if (event && event.key !== 'Escape') return;
      
      if (this.stavAplikace === 'kviz' || this.stavAplikace === 'vysledky') {
        this.stavAplikace = 'detailOkruhu';
      } else if (this.stavAplikace === 'detailOkruhu') {
        this.stavAplikace = 'seznamOkruhu';
      } else if (this.stavAplikace === 'seznamOkruhu') {
        this.stavAplikace = 'menu';
      }
    },
    vyberPredmet(klic, nazev) {
      this.klicPredmetu = klic;
      this.nazevVybranehoPredmetu = nazev;
      this.stavAplikace = 'seznamOkruhu';
    },
    vyberOkruh(okruh) {
      this.vybranyOkruh = okruh;
      this.stavAplikace = 'detailOkruhu';
    },
    jeOkruhHotovy(idOkruhu) {
      if (!this.klicPredmetu) return false;
      return this.dokonceneOkruhy[this.klicPredmetu].includes(idOkruhu);
    },
    spustitKviz() {
      this.indexAktualniOtazky = 0;
      this.skore = 0;
      this.odpovezeno = false;
      this.zvolenyIndex = null;

      if (this.vybranyOkruh && this.vybranyOkruh.kviz) {
        this.vybranyOkruh.kviz = this.zamichejPole(this.vybranyOkruh.kviz);
      }

      this.stavAplikace = 'kviz';
    },
    zkontrolujOdpoved(index) {
      this.odpovezeno = true;
      this.zvolenyIndex = index;
      if (index === this.aktualniKvizOtazka.spravna) {
        this.skore++;
      }
    },
    tridaProMoznost(index) {
      if (!this.odpovezeno) return '';
      if (index === this.aktualniKvizOtazka.spravna) return 'spravne';
      if (index === this.zvolenyIndex) return 'spatne';
      return 'nevybrano';
    },
    dalsiOtazka() {
      if (this.indexAktualniOtazky + 1 < this.vybranyOkruh.kviz.length) {
        this.indexAktualniOtazky++;
        this.odpovezeno = false;
        this.zvolenyIndex = null;
      } else {
        this.dokoncitKviz();
      }
    },
    dokoncitKviz() {
      this.stavAplikace = 'vysledky';
      if (this.skore === this.vybranyOkruh.kviz.length) {
        if (!this.dokonceneOkruhy[this.klicPredmetu].includes(this.vybranyOkruh.id)) {
          this.dokonceneOkruhy[this.klicPredmetu].push(this.vybranyOkruh.id);
        }
      }
    }
  }
};
</script>

<style>
body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
}
.app-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.hlavni-nadpis { color: #4CAF50; font-size: 2.5em; margin-bottom: 5px; }
h2 { color: #ffffff; margin-bottom: 20px; }
.upozorneni { color: #ff9800; font-style: italic; margin-top: 30px; }

.progress-container {
  margin: 20px auto 30px auto;
  max-width: 500px;
  text-align: center;
}
.progress-bar {
  background-color: #333;
  border-radius: 10px;
  height: 18px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #555;
}
.progress-fill {
  background-color: #4CAF50;
  height: 100%;
  transition: width 0.5s ease-in-out;
}
.kviz-progress {
  max-width: 100%;
  margin-top: 0;
}
.kviz-fill {
  background-color: #2196F3;
}
.progress-text {
  display: block;
  margin-top: 8px;
  color: #aaaaaa;
  font-size: 15px;
  font-weight: bold;
}

.tlacitka-grid {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 30px;
}
.btn {
  background-color: #2c2c2c;
  color: white;
  border: 2px solid #4CAF50;
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  width: 250px;
}
.btn:hover:not(:disabled) {
  background-color: #4CAF50;
  color: #121212;
  transform: scale(1.05);
}
.btn-okruh { width: 100%; max-width: 400px; text-align: left; padding-left: 20px; }
.btn-okruh.hotovo {
  border-color: #4CAF50;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.4);
  color: #4CAF50;
}

.btn-zpet {
  background: none;
  border: none;
  color: #aaaaaa;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: underline;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.btn-zpet:hover { color: #ffffff; }

.tlacitka-vedle-sebe { display: flex; justify-content: center; gap: 20px; margin-top: 30px;}
.teorie-box {
  background-color: #1e1e1e;
  padding: 25px;
  border-radius: 10px;
  border-left: 5px solid #4CAF50;
  text-align: left;
  line-height: 1.6;
  margin-bottom: 30px;
  font-size: 17px;
}
.oznameni-hotovo {
  color: #4CAF50;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 18px;
}

.btn-akce { background-color: #4CAF50; color: #121212; font-weight: bold; }
.btn-akce:hover { background-color: #45a049; }
.sekce-kviz { background-color: #1e1e1e; padding: 30px; border-radius: 12px; }
.kviz-hlavicka { display: flex; justify-content: space-between; color: #aaaaaa; margin-bottom: 20px; font-weight: bold; }
.otazka-text { font-size: 22px; margin-bottom: 30px; }
.moznosti-grid { display: flex; flex-direction: column; gap: 15px; align-items: center; }
.btn-moznost { width: 100%; max-width: 500px; text-align: center; border-color: #555; }
.dalsi-btn { margin-top: 30px; }
.btn-moznost:disabled { cursor: default; transform: none; }
.btn-moznost.spravne { background-color: #4CAF50 !important; color: #121212 !important; border-color: #4CAF50 !important; }
.btn-moznost.spatne { background-color: #f44336 !important; color: white !important; border-color: #f44336 !important; }
.btn-moznost.nevybrano { opacity: 0.5; }

.sekce-vysledky { background-color: #1e1e1e; padding: 30px; border-radius: 12px; }
.skore-text { font-size: 24px; color: #ffffff; }
.uspech-text { color: #4CAF50; font-size: 18px; font-weight: bold; margin-top: 10px; }
.neuspech-text { color: #ff9800; font-size: 18px; font-weight: bold; margin-top: 10px; }

@media (max-width: 768px) {
  body {
    padding: 10px;
  }
  .hlavni-nadpis { 
    font-size: 1.8em; 
  }
  .btn {
    width: 100%;
    max-width: 320px; 
  }
  .btn-okruh, .btn-moznost {
    max-width: 100%;
    padding: 12px 15px; 
  }
  .tlacitka-vedle-sebe {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .teorie-box {
    padding: 15px;
    font-size: 15px;
  }
  .sekce-kviz, .sekce-vysledky {
    padding: 15px;
  }
  .otazka-text {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .kviz-hlavicka {
    font-size: 14px;
  }
}
</style>
