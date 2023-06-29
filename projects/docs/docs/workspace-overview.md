# Workspace overview

## What is workspace

Workspace is just a git repository with a special folders structure that enables NGC to operate on it. 
NGC does not care if your workspace is hosted on GitLab, GitHub, Bitbucket or other VCS. Additionally, there exists 
[official community workspace](https://db.nomocode.io/community/sandbox) called sandbox. This workspace 
is public and contains open source projects, libraries and templates everyone can benefit from.

## Workspace structure

As mentioned, NGC relies on special structure of the workspace and we will briefly discuss it below. There are few mandatory 
top level directories that need to exist to call any git repository a NGC workspace.

### libs

This directory contains all of the common code chunks organized within subfolders. This source code is common meaning it can 
be reused in any project within workspace.

### libs/templates

Templates folder holds common Jinja2 templates which can be reused in projects. Templates are split into files and projects. 
Template files are just independent single files wheras templates projects holds whole projects structure and can 
be used as any project foundation.

### projects

This directory keeps all projects within single workspace. We name project an independent fullstack application. From architectural 
point of view project is a collection of microservices that work together as a signle system ( project ). 
