---
title: Hash Studios Crystal Coil
sidebar_position: 10
---

# Installing Hash Studios Crystal Coil

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Experience the thrill of defying gravity with double jumps and customizable jump strength! This Unity Udon prefab empowers you to navigate maps in new and exciting ways, perfect for playful exploration and multiplayer fun with friends. With easy-to-use customization options, you can tailor your jumps to suit any environment or gameplay style.

![Example GIF](/img/productshowcases/hashstudioscrystalcoilshowcase.gif)

<br/>

## Features

- Double Jump Capability
- Customizable Jump Strength
- Adjustable Gravity Settings
- Cooldown Management
- Easy Integration

<br/>

## VR Showcase World

Experience Hash Studios Crystal Coil for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_794a1a1b-0ecf-43b7-86db-684f4650525b)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Crystal Coil from our **[website](https://hashstudiosllc.com/hash-studios-crystal-coil)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag Hash Studios Crystal Coil into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**3. Configure Hash Studios Crystal Coil**

:::tip
To integrate the prefab seamlessly into your environment, refer to our **[Trigger & Box Collider Guide](/DevelopmentDocumentation/docs/general-concepts/triggerbox/)** for optimizing collision settings and interactions.
:::

<div class="image35-left">
   
   ![Example GIF](/img/producteditors/hs_crystalcoil_main.png)

   ![Example GIF](/img/producteditors/hs_crystalcoil_general.png)

   ![Example GIF](/img/producteditors/hs_crystalcoil_advanced.png)

</div>

1. Select Hash Studios Crystal Coil in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Crystal Coil.

<br/><br/>

**4. Edit General Settings**

The `General Settings` section allows you to change the overall settings of the prefab.

- `Crystal-Modified Gravity`, the gravity applied to the player when holding the crystal coil, changing the jump height.
   - Default: 0.75

- `Jump Force`, the force used to propel the player upwards during a jump, effecting jump height.
   - Default: 1

- `Double Jump Permission`, the toggle to allow double jumps.
   - Default: on

- `Double Jump Cooldown`, the time needed before you can double jump again after the first jump.
   - Default: 0.1

<br/><br/>

**5. Edit Advanced Settings**

The `Advanced Settings` section contains additional options to advanced usage of the prefab.

- `Advanced Mode`, the toggle for settings that can cause unexpected results.
   - Default: off

- `Pull Down Strength`, the force to counteract jump strength and prevent flying too high.
   - Default: 0

- `Jump Time`: the duration you go up during a jump based on jump strength. 
   - Default: 0.3

- `Pull Down Time`: the duration you are pulled down, same as jump time. 
   - Default: 0

<br/><br/>

By following these steps, you can successfully install Hash Studios Crystal Coil and experience the thrill of double jumping and customizable navigation in your VRChat world.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hash-studios-crystal-coil)**.
