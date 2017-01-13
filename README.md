# seed-raspberry-ui
### Get the source code
Make a directory for your project.  Clone or download and extract the seed-raspberry-ui in that directory.
```
git clone https://github.com/zhigangyu/seed-raspberry-ui.git
```

### Install the dependencies
```
npm install
bower install
```
### debug on local
```
grunt serve
```
### Create a dist version
Use grunt to create a distribution version of your app, which will be located in the dist folder along with the nginx configuration files.  You will need to run this command during development every time before you cf push to make the latest dist.
```
grunt dist
```

