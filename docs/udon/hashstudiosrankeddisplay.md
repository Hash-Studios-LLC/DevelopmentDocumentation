---
title: Hash Studios Ranked Display
sidebar_position: 10
---

# Hash Studios Ranked Display

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Ranked Display - a unique and innovative Unity Udon prefab that dynamically showcases player rankings in the virtual environment!

Hash Studios Ranked Display allows you to designate specific players within the prefab to display their rankings above their heads. This tool is perfect for highlighting supporters, identifying admins, or indicating the instance master within Udon VR worlds.

<br/>

## Features

- Player Whitelist
- Customizable Ranked Object
- Instance Master Support
- Automatically Networked
- Dynamic Height Options

<br/>

## VR Showcase World

Experience Hash Studios Ranked Display for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_687388eb-951e-4e29-87c3-52eaee2b85e1)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Ranked Display from our **[website](https://www.hashstudiosllc.com/hashstudiosrankeddisplay)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Ranked Display into your world from the Project window.

2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure Hash Studios Ranked Display**

1. Select Hash Studios Ranked Display in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Ranked Display.

<br/>

**4. Edit the Settings**

In the `Settings` section, you can choose settings for ranks:

- `Is Master Ranked`: This toggle determines whether the master of an instance is considered for ranking on the whitelist (Default: on).
- `Height Display Distance`: This is the multiplier that determines how high above the player the rank will display. It also applies to player resizing/scaling (Default: 0.75).

<br/>

**5. Edit the Player Whitelist**

In the `Player Whitelist` section, you can determine which players are included on the whitelist to receive the rank above their head. Simply add their username to the list.

<br/>

**6. Edit the Ranked Object Model**

:::tip
For more detailed information on configuring meshes & materials, visit our [Changing Object Meshes and Materials Guide](/DevelopmentDocumentation/docs/general-concepts/objectmeshesandmaterials/).
:::

In the `Ranked Object Model` section, you can modify various aspects of the model, including its scale, mesh, materials, shaders, and more. For more help on changing the mesh and materials, refer to our separate guide on it.

:::warning
**Note:** It is not recommended, but if you want to adjust the ranked object manually follow the guide below.

<details>
<summary>Editing Rank Object Manually</summary>

1. Navigate to the prefab in your Unity hierarchy.
2. Look for the child object `Cube Rank`, it is in `Hash Studios Rank Display > Example Object [DO NOT MOVE] > Cube Rank`.
3. Select it and then modify the settings in the hierarchy.

</details>
:::

<br/><br/>

By following these steps, you can successfully install Hash Studios Ranked Display and dynamically display player rankings in your VR world.

For more detailed information and resources, visit the **[Official Website](https://www.hashstudiosllc.com/hashstudiosrankeddisplay)** or watch the **[YouTube Tutorial](https://youtu.be/Rvm1jI06w1w)**.
