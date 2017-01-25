**DLL webpack Example**

Пример по сборке dll вендора, api модуля в umd формате и использование этих двух модулей
в main бандле.

При запуске приложения vendor.dll & api.js должны быть собраны:

**Собрать вендор**
``` 
npm run build.vendor
```

**Собрать api**
``` 
npm run build.api
```

**Запустить приложение в дев. режиме**
``` 
npm run server
-> localhost://8081
```

_* Примечание_

Вендор собирается как глобальный модуль, т.е. доступен только в widnow контексте

Seed for plain ts+webpack r&amp;d

 
 


