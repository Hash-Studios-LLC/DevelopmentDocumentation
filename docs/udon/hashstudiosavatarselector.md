---
title: Hash Studios Avatar Selector
sidebar_position: 10
---

# Hash Studios Avatar Selector

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

:::danger
There seems to be an error of not being able to view more than 13 avatars in the list. We are looking into it, but if you still see this issue, please report it to us so we can keep note and remember this detail.
:::

Enhance your VR experience with the Hash Studios Avatar Selector! This user-friendly Udon Unity prefab enables world creators to showcase a selection of avatars, offering visitors a variety of unique transformations. Personalize your world and delight your visitors with this compact yet versatile tool from Hash Studios!

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/e0ZrwvpgTHE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Custom Avatar List
- User-Friendly Interface
- Easy Integration
- Multi-Device Support

<br/>

## VR Showcase World

Experience Hash Studios Avatar Selector for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_a5f9b513-0b51-4477-9fa1-a9ec3f593a44)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Avatar Selector from our **[website](https://hashstudiosllc.com/hashstudiosavatarselector)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Avatar Selector into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Select Hash Studios Avatar Selector**

1. Select Hash Studios Avatar Selector in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Avatar Selector.

<br/>

**4. Customize Your Avatar List**

:::warning
Please ensure that no fields are left blank or empty.
:::

:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/docs/general-concepts/unityspriteconversion/).
:::

- The `Helps & Tips` section of the prefab editor window explains the components that make up an avatar and demonstrates how they're showcased in our prefab.

- The `List of Avatars` section allows you to modify which avatars are displayed and adjust related settings, such as the blueprint ID, name, description, and image.

- **name** - The name that shows on the list.
- **description** - The description that appears when you click on the avatar name in the list of the UI.
- **blueprint ID** - The unique identifier for each avatar.
- **image** - The thumbnail for the avatar. For help on switching your image to a sprite, refer to our guide [Image to Sprite Conversion](/docs/general-concepts/postprocessing/).

Simply press `Add` or `Remove` buttons to edit the list in top-to-bottom order.

<br/><br/>

By following these steps, you can successfully install Hash Studios Avatar Selector and provide an intuitive interface for users to seamlessly browse and switch between a range of avatars.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosavatarselector)** or watch the **[YouTube Tutorial](https://youtu.be/-_YQxw9RZ3A)**.
