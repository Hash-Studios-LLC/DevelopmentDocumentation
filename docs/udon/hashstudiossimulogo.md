---
title: Hash Studios SimuLogo
sidebar_position: 10
---

# Installing Hash Studios SimuLogo

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Hash Studios SimuLogo is an UdonSharp Unity Prefab that presents your world logo before you, either a few seconds after your initial spawn, or when you step into a trigger collider. Hash Studios SimuLogo is a Unity prefab tool that detects a player's spawn or entry into a certain area and promptly displays the world logo.

<br/>

## Features

- PC and VR Compatible
- Two Versions
- Quest Compatible
- Easy to Use
- Customizable and Lightweight

<br/>

## VR Showcase World

Experience Hash Studios SimuLogo for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_6b869c61-e2f8-4657-9c56-761924c7e25c)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios SimuLogo from our **[website](https://hashstudiosllc.com/hashstudiossimulogo)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

:::note
Hash Studios SimuLogo comes in two versions:

1. **On Player Join**: Displays the world logo a few seconds after the player spawns.
2. **Trigger Collider**: Displays the world logo when a player enters a trigger collider area.
:::

1. Drag Hash Studios SimuLogo into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**3. Select Hash Studios SimuLogo**

1. Select Hash Studios SimuLogo in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios SimuLogo.

**4. Customize the Logo**

:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/DevelopmentDocumentation/docs/general-concepts/unityspriteconversion/).
:::

1. Customize the logo you want to be displayed. Ensure it is a sprite as shown in our **[Image to Sprite Conversion Guide](/DevelopmentDocumentation/docs/general-concepts/unityspriteconversion/)**.
2. Set the `Time to Display` after the player enters a collider or joins. Recommended: 1-2 seconds.
3. Set the `Display Time` for how long the logo will display after it appears. Recommended: 5 seconds.

**5. Configure the Trigger Collider (if using the collider version)**

:::tip
For more detailed information on configuring trigger boxes, visit our [Trigger & Box Collider Guide](/DevelopmentDocumentation/docs/general-concepts/triggerbox/).
:::

1. Go to the `Trigger Box Collider` child in the prefab.
2. Open the Inspector and move it around in the `Transform` component or edit the collider in the `Box Collider` component after pressing the `Edit Collider` button.
3. Ensure the collider in the child is a trigger in the Box Collider component.

<br/><br/>

By following these steps, you can successfully install Hash Studios SimuLogo and enhance your world with a customizable logo display feature.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiossimulogo)** or watch the **[YouTube Tutorial](https://youtu.be/7PemtkyvnVA)**.
