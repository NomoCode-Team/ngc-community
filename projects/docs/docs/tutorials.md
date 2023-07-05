# Tutorials

Easiest way to learn is learning by doing. Therefore, here you will find handful step by step tutorials to introduce you into NGC.
Each tutorial is based on previous one so to complete them all follow exercises in the order they have been written.

## Creating your first project

Project in NGC Workspace is a collection of user applications that form together single system - a project. We will start with
very simple project with just one application. Project in NGC manifests itself as just a directory within *projects* folder of the
Workspace.

To create new project in NGC Workspace simply create new folder inside *projects* directory inside your Workspace.
To do so open console at your Workspace root directory and create new directory inside *projects*

```bash
mkdir projects/hello-ngc
```

In this case we have made a project named *hello-ngc*. The name of the folder is at the same time a project name. Please note,
project name needs to be "URL friendly". No special characters are allowed except letters and - sign. If your project name consists of
multiple words please always separate words with - sign and avoid whitespace.

Now, this is the simplest possible project definition in NGC - just an empty project directory. To run your project inside Sandbox
change current working directory of your console into project you have created and then issue a command ***ngc run***.

```bash
cd projects/hello-ngc
ngc run
```

This will result in building and then launching *hello-ngc* project in your Sandbox. When command is completed go ahead to your web
browser and visit [http://hello-ngc.ngc](http://hello-ngc.ngc)

You should see an Nginx default page meaning your project is successfully launched. By default NGC is using static http server.
Let's now set some custom content for your web page. We will add *index.html* file to the project which will print *Hello NGC*
message. To do so you can just create such file in your project root directory or use the following console command:

```bash
echo "Hello NGC" > index.html
```

When your custom index.html file is created. Do *ngc run* to rebuild and re-launch your project.

```bash
ngc run
```

When you refresh your browser tab on [http://hello-ngc.ngc](http://hello-ngc.ngc) you should see now Nginx page is gone and
*Hello NGC* text is displayed instead.

You can add more files and html pages to your project since your project is working as normal static HTTP server

## Templating with Jinja

The core feature of NGC is the ability to template projects with the use of Jinja2 templating engine. Templating makes your project
more flexible and enables project configuration e.g. across different deployment environments. In NGC Jinja templating engine is
used before the application image build step to render any template within the project. Therefore, it behaves like pre-processor
rendering templates not at runtime but during the build.

Let's update previous example project *hello-ngc* with a message that can be easly customized. Additionaly we would like to customize
background color of the home page. Navigate to *projects/hello-ngc* and update index.html file as given below:

```html
<!DOCTYPE html>
<html>
<body style="background-color: white">
   <h1>Hello NGC</h1>
</body>
</html>
```

After updating the file issue *ngc run* command and check if there is no error and page displays properly.

Next, we would like to change background color and the text inside *h1* header. It's not a big deal to update this small *index.html*
but let's imagine script for our HTML page is really big and complex. These two parameters should be easly adjustable for the build.
To do so we will turn *index.html* file into Jinja template and create special configuration file used by NGC to render this file when
building project.

Change file extension by adding extra `.j2` at the end so that *index.html* will be now *index.html.j2*. *.j2* extension stands for
jinja2 template file and NGC will recognize such file as a template to be rendered before adding to the build context. After updating
the file name open it and modify the content to be as follow:

```html
<!DOCTYPE html>
<html>
<body style="background-color: {{ background_color }}">
   <h1>{{ message }}</h1>
</body>
</html>
```

What we just did is to replace the actual literal values with simple Jinja blocks ( double curly braces ) and within these blocks we
put configuration values names. These values will be next defined in a configuration file *values.yaml* that is a special file recognized
by NGC.

Now, create `values.yaml` file in the project root directory i.e. inside *hello-ngc* next to *index.html.j2* file. *values.yaml* file
place is always at application root direcotry. Set the following content in *values.yaml* file:

```yaml
background_color: white
message: Hello NGC template!
```

Now rebuild the project and check again if changes are successfully applied.

Let's now change a little bit our configuration values. Update the *values.yaml* as below and rebuild the project.

```yaml
background_color: blue
message: Simple configuration change made with NGC
```

You can tweek your parameters to experiment a little bit or even have fun and introduce some more configuration parameters. If you would like
to create more complex templates e.g. with conditionals please follow some Jinja tutorials or check [official Jinja documentation](https://jinja.palletsprojects.com/en/3.1.x/). You can find also easy to follow basic Jinja examples [here](https://ultraconfig.com.au/blog/jinja2-a-crash-course-for-beginners/). We will not dvelve much more into it because Jinja templating is out of the scope of NGC documentation.

## Project templates and inheritance

The NGC usefulness lies in its ability to reuse chunks of application code across multiple projects. This is possible thanks to community
that creates and shares various *Project Templates* in NGC Workspace libraries. There is no particular difference between *Project* and
*Project Template* besides that the latter one resides in special *libs* directory where it is recognized by NGC as part of reusable code.
*Project Template* also as name suggest is more configurable and flexible because it almost always consists of some Jinja templates.

In the previous tutorial we have made our project more customizable by introducing Jinja template and configuration file called *values.yaml*.
In this tutorial we will move these project files into *libs* directory so that it can be reused in multiple project. Our goal will be to
create two projects which essentially will have the same code basis but will have different configuration values.

In order to create *Project Template* we will move directly move our previous project into `libs/templates/projects` directory. This is the root
directory for every *Project Template* that NGC will look for when resolving Project inheritance graph. Open console in your Workspace root
directory and execute the following command to move your project folder into *libs*

```bash
mv projects/hello-ngc libs/templates/projects/simple-parent
```

Next we will create new Project that will use our *Project Template* called *simple-parent*. Let's call it *child-project*. Within this project
we will also create a *project manifest file* named *project.ngc.yaml* in the project root directory. This file holds useful metadata information
and it also stores inheritance information of application.

```bash
mkdir projects/child-project
touch projects/child-project/project.ngc.yaml
```

Open `project.ngc.yaml` file and upadate its content to be like below:

```yaml
from: simple-parent

```

Now, navigate in console into *child-project* directory, build your project and check in the web browser. You should see now your *child-project*
being exactly same as our *hello-ngc* project example from previous tutorial but this time we do not have any source files in our project.
This is because all source files are taken from *simple-parent* *Template project* and it's usage is declared in *project.ngc.yaml* through `from`
clausure.

Let's create now second project that will also inherit from *simple-parent* to see how code from this project template can be shared between multiple projects. Repeat the steps above but change the project name to be *second-child* to create second project. This time we will also
make some configuration tweeks in our *second-child* project. Open console in *second-child* project root directory and create there already known configuration file `values.yaml`. Put the following content to this file:

```yaml
background_color: yellow
message: Inheritance in NGC is easy!
```

Build this project and see that although we have same basis *simple-parent* for both our projects - *child-project* and *second-child* - they
differ because *simple-parent* allows to set configuration values that are now different across both projects.

## Compositions

In this example we will learn what is *project composition* in NGC. In short, composition is just inheritance of multiple project templates
( parents ) for the same project.

Create a new NGC project called `composition` and create `index.html` file within it with the following content:

```html
<!DOCTYPE html>
<html>
<body style="background-color: blue">
   <h1>Composition example</h1>
   <img src="image1.jpg" />
   <img src="image2.jpg" />
   <img src="image3.jpg" />
</body>
</html>
```

Build and review project. Don't worry about missing images - we will add them by composition in the next steps.

Now, create 3 project templates named `composition-image1`, `composition-image2` and `composition-image3`.
Within these projects place images `image1.jpg`, `image2.jpg`, and `image3.jpg` respectively. You can download any image you want given you have
permissions to use them or you can also use the following link pick random example image [https://picsum.photos/200/300](https://picsum.photos/200/300). For example to download `image1.jpg` open console in `composition-image1` project template and execute command:

```bash
wget https://picsum.photos/200/300 -O image1.jpg
```

When you have all project templates ready, go back to `composition` project and create there `project.ngc.yaml` with the following content:

```yaml
from:
   - composition-image1
   - composition-image2
   - composition-image3
```

Rebuild your project and see that all your images have been successfully loaded. In this case we composed our project with multiple parents - each
one responsible to provide single image for our composition application. `from` keyword in *project.ngc.yaml* can be therefore a string
or an array of strings in case of composition.

## Overwriting files

So far we have explored various ways of inheriting parent project templates into our projects. However, sometimes even the most flexible and useful project template doesn't really fit our requirements. Additionally, this template project is big enough we don't want to change it's
current implementaion for just a single file that fails to meet our expectations. We don't necesserry need to abandom idea of using such
project template and files ovewriting feature comes to rescue.

Let's build upon our previous `composition` example project. Following instructions from the that previous tutorial add one more image into
`composition-image3` project template and name it `image4.jpg`

Now, we will of course update `index.html` file of `composition` project to render this additional image. The updated `index.html` file should
look like below:

```html
<!DOCTYPE html>
<html>
<body style="background-color: blue">
   <h1>Composition example</h1>
   <img src="image1.jpg" />
   <img src="image2.jpg" />
   <img src="image3.jpg" />
   <img src="image4.jpg" />
</body>
</html>
```

Rebuild the project and check if everything looks as expected and you can see four images rendered in our html page.

Next, let us assume for our project `image4.jpg` is not really what we wanted to have but we also don't want to abandon `composition-image3`
parent project as it still have a lot of usuful functionalities. If that is the case then we can just overwrite this single `image4.jpg` in
`composition` project and still use `composition-image3` template project. To overwrite file we simply create a file with the same name inside
our project. You can do so by opening console in `composition` project and execute:

```bash
wget https://picsum.photos/200/300 -O image4.jpg
```

Now when you rebuild `composition` project you should see that rendered `image4.jpg` comes from `composition` project and not from `composition-image3` - it has been overwritten in our project.

## Schema validation

One of the rules derived from extreme programming methodology is early detection of failures, ideally at the compilation time to provide
fast feedback loop for developers. NGC introduces schema validation for configuration values to enable type-safety checks and constrained
input values in the `values.yaml` file. Moreover, JSON schema files serves as a documentation of values used by project and is utilized to
render form for project values in dashboard. Therefore, every project template that is aimed to be highly re-useable should contain up-to-date
validation schema.

Let us create new project called `schema-example`. Within this project create `index.html.j2` file and fill it with the following content:

```html
<!DOCTYPE html>
<html>
<body style="background-color: white">
   <h1>{{ msg }}</h1>
</body>
</html>
```

Build the project and check results. You should see empty white page because we didn't set `msg` value anywhere. This is not satisfying
solution to us because we didn't receive any error and project built just fine even without `msg` value. This value is not that much important,
but sometimes proper initialization of the value is critical for application to function properly. This is where JSON schema validation comes
into play.

Inside `schema-example` project root directory ( next to index.html.j2 file ) create `schema.json` file with the following content:

```json
{
   "type": "object",
   "properties": {
      "msg": {
         "title": "message",
         "description": "header message displayed at home page",
         "type": "string"
      }
   },
   "required": ["msg"]
}
```

In this file we have declared `msg` property as of type `string` and we added `title` and `description` to it. We also marked `msg` as required
value through the `required` keyword.

Now, try to rebuild project and this time you should see an error message explaining that `msg` value is required but missing. Create
`values.yaml` file and define any message you would like to, for instance:

```yaml
msg: Schema validation example
```

This time you should be able to build your project and see the message when checking in web browser. The full course over JSON schema is
out of the scope of this documentation. For more details you may refer to [official website](https://json-schema.org/) and/or any other tutorial
you like.

## Custom App image

So far all examples were provided with default application image - Nginx server configured to be a static content HTTP server. It would be silly
to think NGC supports only this. In fact, NGC does not care what programming language, framework or even tools you use. To allow such flexibility
NGC relies on common standard to isolate running application processes - encapsulating them in OCI stardard images. In NGC this take a form of
docker images and Dockerfiles - recipies for creating those images. So any given application can successfully be built and run by NGC if it can be
containerized. This applies also for existing projects which you would like to bring to NGC workspace - if you have already a Dockerfile for your
project, NGC will work with it out of the box.

In this example we will create a new project with custom `Dockerfile` to see how you can work with other frameworks than just plain HTTP static
server. We will use `Django` framework that is written in Python.

First, create a new project called `custom-image` and then within this project create a `Dockerfile` file with the following content.

```Dockerfile
FROM python:3.11.4-alpine3.18
RUN python -m pip install Django
WORKDIR /
RUN django-admin startproject app
WORKDIR /app
CMD python manage.py runserver 0.0.0.0:80
```

Now you can build the project and see in web browser that Django server is running and ready to start development. What we just did is we
have overwritten default Dockerfile with our custom one so that NGC will pick it as a docker image recipe. This image is based on another
docker image called `python:3.11.4-alpine3.18` which has already pre-installed Python 3.11. Next, we use `pip` module to install `Django`
python libraries and after that with help of `django-admin` utility we create a new project called `app`. Finally with the last command
we are starting simple development server available in Django framework.

So you may see NGC uses `Docker` as it's containerization managment tool. For those unfamilliar with Docker please refer to the 
[official reference for Dockerfile](https://docs.docker.com/engine/reference/builder/). You don't need to know everything what Docker engine
offers but good understanding of `Dockerfile` is advised if you want to work with custom images.