# Services

`Services` are javascript classes which functions as data collection and data manipulation classes. For instance, consuming HTTP REST service functions will be written in `service` class. As an example, here's how an auth service class looks like :

```
import RequestAdapterService from './requestAdapterService'

class AuthService extends RequestAdapterService {
    async  login(email, password) {
        const loginResponse = await super.sendPostRequest(
                                    'auth/client-login',
                                    { email, password }
                                 );

        return loginResponse;
    }
}

export default AuthService;
```

## HTTP Request Service

If you look closely, there's `RequestAdapterService` . This class is a wrapper class of third-party request agent library being used in this project, which is `axios`. You can utilize `RequestAdapterService` class to create HTTP request without specifying many request parameters since it have been wrapped inside `RequestAdapterService` class. Standard HTTP methods (`GET`, `POST`, `PUT`, and `DELETE`) are supported. Functions that can be used are :

1. `sendGetRequest(relativeURLPath)`
2. `sendPostRequest(relativeURLPath, requestBody)`
3. `sendPutRequest(relativeURLPath, requestBody)`
4. `sendDeleteRequest(relativeURLPath)`
