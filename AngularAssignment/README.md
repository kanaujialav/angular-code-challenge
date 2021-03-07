# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

#Local Setup

clone repository.

install node v10.x.x

go to project root and do npm install or npm i

## user configuration

add array of user Objects.
eg :
for Admin Role
{ id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },

for user Role

{ id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.User },

in environment files .

note: only users those have admin role can access dashboard component


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.