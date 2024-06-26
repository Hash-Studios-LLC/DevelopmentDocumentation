---
title: Hash Studios Player Scanner
sidebar_position: 10
---

# Installing Hash Studios Player Scanner

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

:::danger
There seems to be an error of not being able to view more than 13 players in the list. We are looking into it, but if you still see this issue, please report it to us so we can keep note and remember this detail.
:::

Hash Studios' Player Scanner is a UdonSharp Unity Prefab tool detecting player presence in specified areas and showcasing it on a UI menu.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/e8gYeLCyqqI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Detects player presence
- Customizable detection area
- Real-time UI display
- Easy area naming
- Quest support

<br/>

## VR Showcase World

Experience Hash Studios Player Scanner for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_58ca9ecb-909d-4637-b425-4df15ce298a4)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/DevelopmentDocumentation/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Player Scanner from our **[website](https://hashstudiosllc.com/hashstudiosplayerscanner)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Player Scanner into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure the Prefab**

1. Select Hash Studios Player Scanner in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Player Scanner.

<br/>

**4. Edit Settings**

:::tip
For more detailed information on configuring trigger boxes, visit our [Trigger & Box Collider Guide](/DevelopmentDocumentation/docs/general-concepts/triggerbox/).
:::

   - Change `Name of Area` to the title you want to give for the area you want to display on the menu.

   - Go to the `BoxCollider` child of the prefab and adjust the box collider position in the `Transform Component` or change its size in the `Box Collider` component by pressing the edit collider button.
   - Ensure `isTrigger` in the box collider is enabled.

   This is where players will be detected and, therefore, be shown on the menu if a player enters this area. If a player leaves the box collider, their name will disappear from the list on the menu.

<br/><br/>

By following these steps, you can successfully install Hash Studios Player Scanner and detect and display player presence in your specified areas with ease.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosplayerscanner)** or watch the **[YouTube Tutorial](https://youtu.be/e8gYeLCyqqI)**.
