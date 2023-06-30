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
