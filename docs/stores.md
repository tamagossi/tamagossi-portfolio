# Stores

`Stores` are javascript classes which functions as `Mobx Provider Store` ([https://mobx.js.org/getting-started.html](https://mobx.js.org/getting-started.html)) . Since some data state will be observed asynchronously (e.g. auth data, profile data, and application on process), reactive stores will be used in this project. Here's an example of store class :

```
import { observable, action } from  'mobx';

class  ProfileStore {

    @observable  userData  = {
        username:  '',
        firstname:  '',
        lastname:  ''
    };

    @action
    assignActiveUser(userData) {
        this.userData  =  userData;
    }

    @action
    updateUsername(username) {
        this.userData.username  =  username;
    }

    @action
    flushUserData() {
        this.userData  = {
        username:  '',
        firstname:  '',
        lastname:  ''
    };

}

const  profileStore  =  new  ProfileStore();

export  default  profileStore;
```

Take a look at last 3 lines of the snippet.

```
const  profileStore  =  new  ProfileStore();

export  default  profileStore;
```

`Stores` should be written in this fashion to ensure that a single instance of the `store` is being exported, so observable will work in intended way (shared observable accross all injected components). Library used to bind `Mobx` to `React` in this project is [https://github.com/mobxjs/mobx-react](https://github.com/mobxjs/mobx-react).

`n.b. decorators should be come first to your mind when writing store attributes (properties or functions)`
