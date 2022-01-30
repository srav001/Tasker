# An Simple Todo app 

This app was built to solve a personal problem of mine. The problem was simple. 

* I needed an app to add tasks for the day or for the week. 
* It should be simple, hassle free. No extra bells and whistles needed.
* Except that it should be available on phone as well as desktop( Linux in my case ), so that the tasks are synced.
* It should have a dark mode ;)

### The setup
Vue 3 is used at te front end and Supabase is used at the back end. Supabase was chosen over firebase as currently it doesn't have any limit on the writes and reads per day unlike firebase. For the front end I used my own template as the starter. [Click here for more info](https://github.com/srav001/vue-ionic-template)

Note: 
> This project uses pnpm. You can aslo use npm. The steps listed below are for pnpm. If you use npm, please look up the the differences [here](https://pnpm.io/pnpm-vs-npm).

### To test locally :
```
pnpm setup
pnpm dev
```

### To build for Web :
```
pnpm build-web
```

### To buld for Android :
* if you have not build for web yet
```
pnpm build-web
```
* If you are building for android for the first time.
```
pnpm cap add android
```
* Then for the rest
```
pnpm cap copy android
```
* To open in android studio for building app
```
pnpm cap open android
```
