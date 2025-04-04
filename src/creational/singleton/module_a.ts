// Using Class
// import { MyDatabaseClassic } from './db/my-database-classic';

// const myDatabaseClassic = MyDatabaseClassic.instance;

// myDatabaseClassic.add({ name: 'Giovanni', age: 22 });
// myDatabaseClassic.add({ name: 'Juliana', age: 26 });
// myDatabaseClassic.add({ name: 'André', age: 29 });

// export { myDatabaseClassic };

// Using Const

// import { MyDatabaseModule } from './db/my-database-module';

// const myDatabaseModule = MyDatabaseModule;
// myDatabaseModule.add({ name: 'Giovanni', age: 22 });
// myDatabaseModule.add({ name: 'Juliana', age: 26 });
// myDatabaseModule.add({ name: 'André', age: 29 });

// export { myDatabaseModule };

// Using Function

import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Giovanni', age: 22 });
myDatabaseFunction.add({ name: 'Juliana', age: 26 });
myDatabaseFunction.add({ name: 'André', age: 29 });

export { myDatabaseFunction };
