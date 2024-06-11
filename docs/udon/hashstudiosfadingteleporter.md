---
title: Hash Studios Fading Teleporter
sidebar_position: 10
---

# Installing Hash Studios Fading Teleporter

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Fading Teleporter—your seamless gateway to limitless possibilities in your Unity Udon worlds. This cutting-edge prefab offers both one-way and two-way teleport options, ensuring a smooth and customized experience. Perfectly compatible across VR, PC, and Android, our teleporter accommodates avatars of all sizes.

<br/>

## Features

- Fading Transition
- Multiplatform Support
- Avatar Size Flexibility
- One-Time Teleportation
- Two-Way Teleportation

<br/>

## VR Showcase World

Experience Hash Studios Fading Teleporter for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_1d361447-d0eb-4ac0-8ac7-276f621437ea)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Fading Teleporter from our **[website](https://hashstudiosllc.com/hashstudiosfadingteleporter)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag `Hash Studios Fading Teleporter` into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**3. Select Hash Studios Fading Teleporter**

1. Select `Hash Studios Fading Teleporter` in your Hierarchy.
2. In the Inspector window, you will see the configuration options for `Hash Studios Fading Teleporter`.

<br/>

## Configuration

### Setting Up Trigger Box

:::tip
For more detailed information on configuring Trigger Boxes, visit our [Trigger & Box Collider Guide](/DevelopmentDocumentation/docs/general-concepts/triggerbox/).
:::

1. Locate the parent object of the prefab and go to the child called `Trigger Box`.
2. Adjust the position in the `Transform` component and edit the scale of the collider in the `Box Collider` component after pressing the `Edit Collider` button.
3. Ensure `isTrigger` is enabled.

### One-Way Version

1. Rotate the `Location to Teleport To` object as the orientation of that object will determine the direction the player faces upon teleporting.

### Two-Way Version

1. Rotate the `Teleporter` object. The orientation of this object will determine the direction the player faces upon exiting the teleporter.

<br/><br/>

By following these steps, you can successfully install `Hash Studios Fading Teleporter` and enhance your Unity Udon world with seamless teleportation capabilities.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosfadingteleporter)** or watch the **[YouTube Tutorial](https://youtu.be/hsYF3S7ZWAg)**.
