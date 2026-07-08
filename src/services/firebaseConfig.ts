import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

/**
 * Configuração do Firebase Realtime Database.
 * Para usar em produção ou testes em rede real, substitua pelas credenciais
 * do console do Firebase (https://console.firebase.google.com/).
 */
export const firebaseConfig = {
  apiKey: "AIzaSyALOxY1UGcvlisr3j-YLU1dFgaUTUVCLFw",
  authDomain: "dnd-tactical-app.firebaseapp.com",
  databaseURL: "https://dnd-tactical-app-default-rtdb.firebaseio.com",
  projectId: "dnd-tactical-app",
  storageBucket: "dnd-tactical-app.firebasestorage.app",
  messagingSenderId: "768650823794",
  appId: "1:768650823794:web:fa5df4304535371aaadaeb",
  measurementId: "G-1M2JMFBBER"
};

/**
 * Flag para alternar entre o Firebase real e o Mock em memória / armazenamento local.
 * Como o projeto é uma demonstração de arquitetura de dados (Padrão Adapter/Repository),
 * deixamos o Mock ativado por padrão caso a chave do Firebase não tenha sido trocada.
 */
export const IS_DUMMY_KEY = firebaseConfig.apiKey.includes("DummyKey");

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);
