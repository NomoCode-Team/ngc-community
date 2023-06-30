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
