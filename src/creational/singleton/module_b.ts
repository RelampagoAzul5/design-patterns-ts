// Using Class

// import { MyDatabaseClassic } from './db/my-database-classic';
// import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.instance;

// myDatabaseClassic.add({ name: 'Leticia', age: 15 });
// myDatabaseClassic.add({ name: 'Rafael', age: 18 });
// myDatabaseClassic.add({ name: 'Lucas', age: 24 });
// myDatabaseClassic.show();

// console.log(myDatabaseFromModuleA === myDatabaseClassic);

// Using Const

// import { MyDatabaseModule } from './db/my-database-module';
// import { myDatabaseModule as myDatabaseFromModuleA } from './module_a';

// const myDatabaseModule = MyDatabaseModule;

// myDatabaseModule.add({ name: 'Leticia', age: 15 });
// myDatabaseModule.add({ name: 'Rafael', age: 18 });
// myDatabaseModule.add({ name: 'Lucas', age: 24 });
// myDatabaseModule.show();

// console.log(myDatabaseFromModuleA === myDatabaseModule);

// Using Function

import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDatabaseFromModuleA } from './module_a';

const myDatabaseModule = MyDatabaseFunction;

myDatabaseModule.add({ name: 'Leticia', age: 15 });
myDatabaseModule.add({ name: 'Rafael', age: 18 });
myDatabaseModule.add({ name: 'Lucas', age: 24 });
myDatabaseModule.show();

console.log(myDatabaseFromModuleA === myDatabaseModule);
