---
title: Installing Shader Graph for Unity
sidebar_position: 1
---

# Installing Shader Graph for Unity

Some of our prefabs require Shader Graph and **z3y’s Shader Graph fork** for advanced visual effects like liquid shaders. Shader Graph allows you to easily edit and customize shaders visually, while z3y’s fork ensures compatibility with VRChat's rendering pipeline.

This guide will walk you through the process of installing both Shader Graph and z3y’s Shader Graph package.

:::warning
**Important:** This guide is for Unity 2022.3.6f1. The steps may differ in future versions of Unity.
:::

<br/>

## What is Shader Graph?

Shader Graph is a Unity tool that enables the creation of shaders using a visual interface instead of code. It’s particularly useful for creating complex visual effects like liquid shaders, and it allows creators to make adjustments without deep programming knowledge.

For more information, see the **[Unity Shader Graph Documentation](https://docs.unity3d.com/Manual/com.unity.shadergraph.html)**.

<br/>

## Requirements

Before starting, ensure you have the following:

- **Unity Shader Graph** installed via the Unity Package Manager.
- **z3y’s Shader Graph Fork** for VRChat compatibility.
- A Unity project set up with the proper rendering pipeline. Currently VRChat supports `Default Render Pipeline`

<br/>

## Installation Steps

### 1. Install Shader Graph

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

  <div class="image50-left">
    ![Shader Graph in Package Manager](/img/generalconcepts/shadergraph.png)
  </div>

</div>

1. Open Unity and navigate to **Window > Package Manager**.
2. In the Package Manager, ensure **Unity Registry** is selected in the dropdown menu.
3. Search for **Shader Graph**.
4. Select **Shader Graph** from the list and click **Install**.

<br/>

### 2. Add z3y’s Shader Graph Repository

To use advanced liquid shaders, you’ll need to add z3y’s Shader Graph package.

<div class="image50-left">
  ![Adding z3y's repository](/img/generalconcepts/addingrepository.png)
</div>

1. Open **VRCCreatorCompanion**.
2. Go to **Settings > Packages > Add Repository**.
3. Enter the repository URL: **https://z3y.github.io/vpm-package-listing/index.json**.
4. Click **Save**.

<br/>

### 3. Install z3y’s Shader Graph Fork

<div class="image50-left">
  ![Installing Shader Graph Fork](/img/generalconcepts/installingrepository.png)
</div>

1. Return to the VRCCreatorCompanion main menu and click **Manage Project** for your active Unity project.
2. Search for **Shader Graph Target (z3y)** in the Package Manager.
3. Select the latest version and click **Install**.

<br/>

### 4. Configure Shaders for z3y Compatibility

For existing shaders, follow these steps to ensure compatibility with z3y’s fork:

1. Open the **Shader Graph** file you want to update.
2. In the Shader Graph Editor, go to the **Inspector** panel.
3. Add a new target by selecting **Built-In (z3y)**.
4. Save your Shader Graph file to apply the changes.

<br/>

## Fixing Older Shaders

If you’re using an older version of **Hash Studios Liquid Shaders** or any incompatible shaders:

1. Open the Shader Graph file for the affected shader.
2. In the **Inspector**, ensure the target is set to **Built-In**.
3. Add an additional target by selecting **Built-In (z3y)**.
4. Save the shader and test in Unity.

<div class="image50">
  ![Broken Shader Fix](/img/productshowcases/brokenshader.gif)
</div>

<br/>

## Creating a New Shader with z3y’s Shader Graph

If you want to create a new shader for your project:

1. Open Unity and go to **Assets > Create > Shader > PBR Graph**.
2. In the Shader Graph Inspector, select **Built-In (z3y)** as the target.
3. Design your shader using nodes in the Shader Graph Editor.
4. Save the shader and apply it to your materials.

<br/>

## Using z3y’s Shader Graph Fork Outside VRChat (Optional)

If you wish to use z3y’s Shader Graph fork in non-VRChat projects:

1. Visit the **[z3y GitHub repository](https://github.com/z3y/ShaderGraph)**.
2. Download the Unity package from the **Releases** section.
3. Import the package into your Unity project.
4. Follow the standard Shader Graph installation and configuration steps.

<br/>

## Troubleshooting

### Shader Graph Not Found
- Ensure you’re using Unity 2022.3.6f1 or higher.
- Verify that the **Unity Registry** is selected in the Package Manager.

### z3y Repository Errors
- Double-check the repository URL: **https://z3y.github.io/vpm-package-listing/index.json**.
- Ensure you’re using the latest version of VRCCreatorCompanion.

### Shader Effects Not Working
- Confirm that the shader target is set to **Built-In (z3y)**.
- Rebuild and reimport the shader file in Unity.

<br/>

By following this guide, you can install and configure Shader Graph and z3y’s Shader Graph fork for advanced shader functionality in your Unity project. For more details, visit the **[z3y Shader Graph GitHub](https://github.com/z3y/ShaderGraph)** or the **[Unity Shader Graph Documentation](https://docs.unity3d.com/Manual/com.unity.shadergraph.html)**.
