---
title: Installing Shader Graph for Unity
sidebar_position: 1
---

# Installing Shader Graph for Unity

Some of our prefabs may require Shader Graph to use them since it makes our development easier and allows you as a creator to edit them more easily. This guide will walk you through the process of installing Shader Graph in Unity and how to use it with our prefabs.

:::warning

**Important:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

<br/>

## What is Shader Graph?

Shader Graph is a tool in Unity that allows you to build shaders visually. Instead of writing code, you create and connect nodes in a graph network, making it easier to understand and create complex shaders. Shader Graph provides a more intuitive way to work with shaders and can significantly speed up the development process.

For more detailed information on Shader Graph, refer to the [Unity Shader Graph Documentation](https://docs.unity3d.com/Manual/com.unity.shadergraph.html).

<br/>

## Steps to Install Shader Graph

**1. Open Your Unity Project**

1. Open your Unity project in Unity 2022.3.6f1 or higher.

**2. Access the Package Manager**

1. In Unity, go to `Window` > `Package Manager` to open the Package Manager.

**3. Install Shader Graph**

1. In the Package Manager window, ensure that `Unity Registry` is selected in the `Packages` drop-down menu.
2. Search for `Shader Graph`.
3. Click on `Shader Graph` in the list.
4. Click the `Install` button in the lower right corner of the Package Manager window.

**4. Import Our Prefab**

1. Download the prefab from our store.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**5. Edit the Shader Graph**

1. To edit the shader, locate the Shader Graph file in the prefab directory:
   - In the Project window, navigate to the directory where the prefab was imported.
   - Find the Shader Graph file, which will have a `.shadergraph` extension.
2. Double-click on the Shader Graph file to open it in the Shader Graph Editor.
3. Make your desired edits in the Shader Graph Editor.

<br/>

By following these steps, you can install Shader Graph in Unity, import our prefabs, and edit the shaders to customize them for your needs.

For more detailed information on using Shader Graph, refer to the [Unity Shader Graph Documentation](https://docs.unity3d.com/Manual/com.unity.shadergraph.html).
