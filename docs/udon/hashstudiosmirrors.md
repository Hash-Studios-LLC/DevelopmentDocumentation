---
title: Hash Studios Mirrors
sidebar_position: 10
---

# Installing Hash Studios Mirrors

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Enhance your VR environment with Hash Studios Mirrors. This mirror prefab offers customizable settings and unique functionalities to create an immersive scene. Compatible with both Quest and PC, this mirror supports both Local and Global functionality.

![Example GIF](/img/productshowcases/hashstudiosmirrorsshowcase.gif)

<br/>

## Features

- Quest & PC compatible
- Supports Local and Global mirror functionality
- Customizable mirror settings
- Trigger-based visibility options

<br/>

## VR Showcase World

Experience Hash Studios Mirrors for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_734fca4a-cba3-4b4c-b3e3-743f94d30614)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Mirrors from our **[website](https://hashstudiosllc.com/hashstudiosmirrors)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Mirrors into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Adjust the Trigger Box**

:::tip
For more detailed information on configuring trigger boxes, visit our [Trigger & Box Collider Guide](/docs/general-concepts/triggerbox/).
:::

1. Find the child object called `TriggerBox`.
2. Move it around using the `Transform` component or resize it with the `Box Collider` component. Press the `Edit Collider` button to resize.

<br/>

**4. Configure the Mirror Settings**

1. Select Hash Studios Mirrors in your Hierarchy.
2. In the Inspector window, go to the `Settings` section to configure the mirror prefab:
   - **Is Mirror Global**: This toggle enables or disables the mirror from being global (Default: off). If the mirror is global, when a player sets the mirror to be active, it is visible to everyone.
   - If the mirror is local, you can customize additional options:
     - **Is Enabled On Trigger Enter**: This toggle enables the ability for the mirror to appear when a player enters the trigger box (Default: on).
     - **Is Disabled On Trigger Exit**: This toggle disables the mirror when a player exits the trigger box (Default: on).

<br/><br/>

# Fixing Multiple Players Not Being Visible

:::tip
For more detailed information on configuring reflection layers, visit our [Understanding Unity Layers with Udon](/DevelopmentDocumentation/docs/general-concepts/layers/) documentation.
:::

If you encounter an issue where multiple players are not visible in the mirror, follow these steps:

1. Select the `Hash Studios Mirrors` prefab in the Hierarchy.
2. Click on each mirror variant (`High Quality`, `Low Quality`, `Skybox`, `Avatar`).
3. In the Inspector window, locate the `VRC Mirror Reflection` component.
4. In the `Reflect Layers` dropdown, make sure to select both `Player` and `Player Local`.

By following these steps, you ensure that the mirror can render multiple players correctly, solving the visibility issue. This setup helps create a more immersive and accurate reflection experience in your VR environment.

<br/>

## Patreon Access

Patreon members get exclusive access to Hash Studios Mirrors from **6/20/2024 - 7/29/2024**. Join our Patreon to take advantage of this limited-time offer!

<br/><br/>

By following these steps, you can successfully install Hash Studios Mirrors and enhance your VR environment with customizable mirror settings and unique functionalities.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosmirrors)**.
