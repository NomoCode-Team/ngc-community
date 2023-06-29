# Templates

## Introduction

NGC uses Jinja2 templating engine to leverage code reusability to another level. With Jinja2 templating almost every project file 
can be a template ( excluding project.ngc.yaml and values.yaml ). In practice it means you can create not only projects but also 
project templates making your application configurable and flexible. Templates are stored in libs/templates directory and/or directly 
within user project. Templates in libs/templates/projects are collection of files which together form a project basis. This basis can 
be then inherited or composed in user project allowing to lay the common ground across multiple projects.

## How it works in NGC?

When project is being built every source file is copied into build context. Build context is just a temporary build directory. 
Source files are copied starting from very bottom of the project inheritence - first files from inherited project templates 
are copied then the user project itself ( all in the order of inheritence ). If there are multiple files with the same name in the 
same relative directory, then files are overwritten in favor of child ( same behaviour like overwritting class method in any 
programming language ). After all project files are copied into build context, Jinja2 engine is started and it will render all project 
files with *.j2 file extension. Templates are rendered using variables stored in values.yaml file. NGC is looking for this file 
in the project root directory. When multiple variables.yaml are provided ( both in project template an user project ) values stored by 
these files are merged together. Values from base/template project can be overwritten in a same manner template files are. 
Although values.yaml file cannot be templated it's values that are stored within this file can like in Ansible playbook.

## More details on Jinja2

Here we are just discussing how Jinja2 fits into NGC. If you are new to Jinja2 templating please refer to the 
[official documentation](https://jinja.palletsprojects.com/en), as the Jinja2 usage is out of the scope of the NGC 
documentation.
