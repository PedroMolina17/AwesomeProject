import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'mydatabase.db',
    location: 'default',
  },
  () => console.log('Base de datos abierta'),
  error => console.error('Error al abrir la base de datos: ', error),
);

export default db;
