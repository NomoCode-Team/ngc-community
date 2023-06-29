# Projects

## Overview

Projects in NGC are user fullstack applications deployed independently. User projects are stored in projects directory and they are created with microservices architecture in mind 
utilizng Docker containerization. Eventually, each project is encapsulated in docker containers allowing to bring into project any tool 
external libraires or frameworks users like. Users can actually forget about all NGC related stuff and develop application as usual they 
would without NGC.
User projects are split into two types based on the number of microservices: single or multi application project

## Single-App Project

Single application user project, or just single app project in short, are projects which deploy only one microservice i.e. docker 
container for example a node.js running discord bot. Single app project requires project.ngc.yaml file to be present at project 
root directory. More on project.ngc.yaml will be discovered later in this documentation. Because every NGC project is built as docker 
container also a Dockerfile can but there side by side to the project.ngc.yaml. However, If Dockerfile is not present a default one will 
be inserted with http static server running on nginx. Note, you can also derive Dockerfile from base project ( project template ) 
- we are talking here about files which will ultimately land into the build context meaning files across whole project inheritence tree count.

## Multi-App Project

This kind of project requires multiple microservices and as you already may get our point we are talking about apps and microservices 
interchangeably. In NGC we call microservice an app and project can of course have multiple apps. Multi-app project contains apps folder 
in the project root directory. Apps folder contains another folders each for one application which are essentially just a collection of 
Single-App Projects. Apps are always single application projects meaning they cannot have another apps folder inside. Structure of 
Multi-App Project is therefore flat and it is just a composition of equally permitted apps. 

Remember, user projects can only be created in projects top level workspace directory. Project templates are as the name suggest just 
templates and they have to be inherited in user project to be used ( they behave like an abstract class concept from programming )
