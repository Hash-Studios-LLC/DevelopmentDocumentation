---
title: Hash Studios Liquid Shaders
sidebar_position: 10
---

# Installing Hash Studios Liquid Shaders

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Liquid Shaders—a versatile and dynamic set of liquid materials and shaders designed to enhance your world with realistic water and lava effects. Whether you're creating oceans, pools, or molten lava, these shaders bring your environment to life with stunning visual fidelity.

The shader pack includes:

- Water (Ocean, Pool, Beach)
- Swampy Water
- Toon Water
- Lava (Classic, Molten)

Each shader features customizable properties for waving, movement, and distortion, ensuring your liquids look as realistic or stylized as you desire. Learn more at [our website](https://hashstudiosllc.com/hashstudiosliquidshaders).

<div class="image100">
   
   ![Example GIF](/img/productshowcases/liquidshadershowcase.gif)

</div>

<br/>

## Features

- **Water (Ocean, Pool, Beach):**
  - Main and Second Normal Textures
  - Shallow and Deep Water Colors
  - Displacement and Tiling Strength
  - Normal Strength, Smoothness, and Metallic Properties

- **Swampy Water:**
  - Includes all features of regular water
  - Algae Color, Tiling Strength, Density, and Direction

- **Toon Water:**
  - Wave and Foam Textures
  - Water and Foam Colors (Light and Dark)
  - Foam Distance, Size, Wave Strength, Speed, Choppiness, and Opacity

- **Classic Lava & Molten Lava:**
  - Lava and Normal Textures
  - Scale, Metallic, Smoothness, Lava Colors
  - Bottom Power and Remap, Lava Speed
  - Normal Speed and Remap
  - Fresnel and Fresnel Color
  - Voronoi Speed, Scale, and Angle Offset
  - Simple Noise Speed, Amount, Power, and Scale

<br/>

## Requirements

- **Unity Shader Graph**: Ensure you have the Unity Shader Graph package installed.

- **z3y's Shader Graph Package**: Follow the instructions to add z3y's Shader Graph package.
  - Website: [z3y's Shader Graph](https://github.com/z3y/ShaderGraph)
  - Repository: `https://z3y.github.io/vpm-package-listing/index.json`

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## How to Use Hash Studios Liquid Shaders

<div class="image-container">
  <div class="imageBlock">
    ![Example GIF](/img/producteditors/hsls-beachwater.png)
  </div>

  <div class="imageBlock">
    ![Example GIF](/img/producteditors/hsls-poolwater.png)
  </div>
</div>

<div class="image-container">
  <div class="imageBlock">
    ![Example GIF](/img/producteditors/hsls-swampywater.png)
  </div>

  <div class="imageBlock">
    ![Example GIF](/img/producteditors/hsls-lava.png)
  </div>

  <div class="imageBlock">
    ![Example GIF](/img/producteditors/hsls-moltenlava.png)
  </div>
</div>

1. Ensure you have all the requirements installed and set up as per the steps above.

2. Drag the desired shader from the Hash Studios Liquid Shaders package onto the object in your scene. 
   - Note: It may look flat once applied.

3. Modify the shader properties in the Inspector to achieve the desired visual effect. Adjust settings such as colors, normal maps, wave strength, and more to customize the look.

<br/>

## Installation Steps

**1. Install Shader Graph**

<div style={{ display: 'flex', justifyContent: 'auto', alignItems: 'center' }}>

  <div class="image50-left">
   
    ![Example GIF](/img/generalconcepts/shadergraph.png)

  </div>
  
  <div class="image25-left">
    
    ![Example GIF](/img/generalconcepts/findpackagemanager.png)


  </div>

</div>

1. In Unity, open the Package Manager by navigating to `Window` > `Package Manager`.
2. In the Package Manager, search for `Shader Graph` in the top left search bar.
3. Select `Shader Graph` from the list of results and click `Install`.

<br/>

**2. Install z3y's Shader Graph Package**

<div class="image50-left">
   
   ![Example GIF](/img/generalconcepts/addingrepository.png)

</div>

1. Open VRCCreatorCompanion, go to `Settings`, then `Packages`, and click `Add Repository`.
2. Enter the repository URL: `https://z3y.github.io/vpm-package-listing/index.json`.

<br/>

<div class="image50-left">
   
   ![Example GIF](/img/generalconcepts/installingrepository.png)

</div>

3. Ensure that `z3y's packages` is checked.

<br/>

<div class="image50-left">
   
   ![Example GIF](/img/generalconcepts/manageproject.png)

</div>

4. Return to the main screen of VRCCreatorCompanion, find your project, and click `Manage Project`.

<br/>

<div class="image50-left">
   
   ![Example GIF](/img/generalconcepts/targetversion.png)

</div>

5. In the Package Manager, search for `Shader Graph Target (z3y)` and install the latest version.

<br/>

**3. Download and Import Hash Studios Liquid Shaders**

1. Download Hash Studios Liquid Shaders from our **[website](https://hashstudiosllc.com/hashstudiosliquidshaders)**.
2. In Unity, go to `Assets` > `Import Package` > `Custom Package...`.
3. Locate and select the downloaded shader package.
4. Click `Import` to add the shaders to your project.

<br/>

**4. Using the Shaders in Your Project**

1. To use the Hash Studios Liquid Shaders, utilize the pre-made shaders provided in the package.
2. Drag and drop the desired shader onto your materials or objects in the scene to apply the effect.

<br/>

## Fixing Older Versions of Hash Studios Liquid Shaders

<div class="image50">
   
   ![Example GIF](/img/productshowcases/brokenshader.gif)

</div>

If you have an older version of Hash Studios Liquid Shaders that does not support z3y, follow these steps:

1. Open the Shader Graph for the shader you want to fix.

2. In the Shader Graph Inspector, ensure your current target is set to `Built-In`.

3. Add an additional target by selecting `Built-In (z3y)`.

This process allows you to update your shaders to support z3y's Shader Graph package without losing existing functionality.

<br/><br/>

## Creating a New Shader with z3y's Shader Graph

If you want to create a new shader from scratch using z3y's Shader Graph:

1. In Unity, open Shader Graph and create a new shader.

2. Choose the `Built-In (z3y)` target. Do not choose the default Shader Graph target.

<br/><br/>

## Using z3y's Shader Graph Fork in Non-VRChat Projects (Optional)

1. If you want to use these shaders in a non-VRChat project, import the Unity Package from the releases section on the GitHub repository's Release section.

<br/><br/>

By following these steps, you can successfully install Hash Studios Liquid Shaders and enhance your virtual environment with stunning water and lava effects.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosliquidshaders)**.
