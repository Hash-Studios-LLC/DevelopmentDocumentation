---
title: Hash Studios Information Board
sidebar_position: 10
---

# Installing Hash Studios Information Board

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

:::danger
**Important Notice:** Newer versions of the prefab have fixed issues related to the prefab not being local. Older versions of the prefab are global and broken, so please install the updated version.
:::

Introducing Hash Studios Information Board: a simple tool for showing information in Unity. Just drag, drop, and customize.

Choose when and how your information appears—when triggered, on a timer, or always visible. Easily adjust everything with a few clicks, from the size of the trigger zone to the text displayed.

Upgrade your virtual world easily with Hash Studios Information Board.

<br/>

## Features

- Trigger Activation
- Timed Display
- Persistent Display
- One-Time Show
- Scalable Trigger Zone
- Text Animation
- User-Friendly UI

<br/>

## VR Showcase World

Experience Hash Studios Information Board for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_95c278bc-7685-44cf-9c6e-4bfca3b5d97a)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Information Board from our **[website](https://hashstudiosllc.com/hashstudiosinformationboard)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Find and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag `Hash Studios Information Board` from the Project window into your scene.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**3. Set Up the Information Board**

1. Select `Hash Studios Information Board` in your Hierarchy.
2. In the Inspector window, you will see options to configure the Information Board.

**4. Adjust the Trigger Box**

:::tip
For more detailed information on configuring trigger boxes, visit our [Trigger & Box Collider Guide](/DevelopmentDocumentation/docs/general-concepts/triggerbox/).
:::

1. Find the child object called `TriggerBox`.
2. Move it around using the `Transform` component or resize it with the `Box Collider` component. Press the `Edit Collider` button to resize.

**5. Configure Display Settings**

1. Click on the prefab to see its settings.
2. Choose how the menu appears:
   - `Display When On Trigger`: The menu appears while the player is inside the trigger box.
   - `Display Timed After Trigger`: The menu appears for a set time after a player enters the trigger box.
   - `Always Display After Trigger`: The menu stays up forever after a player enters the trigger box.
3. Set the `Text To Display on Board` to show your desired text.
4. For some settings, you can enable `Display Only Once`, so the menu shows up only once and never again.

<br/><br/>

By following these steps, you can easily install Hash Studios Information Board and improve your virtual world's information display.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosinformationboard)** or watch the **[YouTube Tutorial](https://youtu.be/7TkowZghnGE)**.
