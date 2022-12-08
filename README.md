# Welcome to JOBPKDO

## APP_LINK - [http://jobpkdo.vercel.app/](http://jobpkdo.vercel.app/)

### How to setup

- Clone the Repo:

  ```bash
  https://github.com/Gulshanaggarwal/v2.jobpkdo
  ```

- To run the Frontend development server:

  ```bash
  cd client
  npm install
  npm run dev
  ```

- To run the backend development server:

```bash
  cd Server
  npm install
  npm run build
  npm run dev
  ```

#### Environement Variables

##### Front-end -

NEXT_PUBLIC_FIREBASE_API_KEY= Firebase Credentials
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= Firebase Credentials
NEXT_PUBLIC_FIREBASE_PROJECT_ID= Firebase Credentials
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= Firebase Credentials
NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID= Firebase Credentials
NEXT_PUBLIC_FIREBASE_APP_ID= Firebase Credentials
NEXT_PUBLIC_FIREBASE_MESAUREMENT_ID= Firebase Credentials
NEXT_PUBLIC_SERVER_BASE_URL = your backend url

Note: You need to enable sign in with Twitter in firebase authentication.

##### Backend -

DB_URL= Mongodb url(local/Atlas)

BEARER_TOKEN= Token to use Twitter API V2
