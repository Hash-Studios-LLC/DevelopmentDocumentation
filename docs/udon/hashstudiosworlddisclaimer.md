---
title: Hash Studios World Disclaimer
sidebar_position: 10
---

# Installing Hash Studios World Disclaimer

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Hash Studios World Disclaimer is a dynamic Unity Udon prefab designed for virtual world creators and event hosts. It offers a seamless way to display tailored disclaimers or important messages to players upon entry. With customizable features like head tracking, movement control, collider management, avatar-based sizes, in-game activation, and menu design, it ensures an immersive, yet informative experience tailored to each world's unique needs.

<br/>

## Features

- Event Activation
- Selectable Disclaimers
- Head Tracking
- Avatar Resizing
- Spawn Options
- Player Movement Control
- Collider Activation

<br/>

## VR Showcase World

Experience Hash Studios World Disclaimer for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_efd5b34d-b269-4e49-b86c-abc5fc7722db)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios World Disclaimer from our **[website](https://hashstudiosllc.com/hashstudiosworlddisclaimer)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

**2. Add the Prefab to Your World**

1. Drag Hash Studios World Disclaimer into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

**3. Select Hash Studios World Disclaimer**

1. Select Hash Studios World Disclaimer in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios World Disclaimer.

**4. Configure World Information**

:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/DevelopmentDocumentation/docs/general-concepts/postprocessing/).
:::

Inside the `World Information` section, you can set information such as:
- `World Name` - the name of the world that will appear on your World Welcome Page. The length of your name will automatically adjust on the welcome page.
- `Welcome Message` - the message that will appear on the World Welcome Page, which will also adjust automatically for length.
- `World Rules` - an array of strings for the list of rules that will display on the World Rules Disclaimer Page. They are automatically numbered.
- `World Logo` - the logo that will be displayed on the World Welcome Page. Make sure to refer to the **[Image to Sprite Conversion Guide](/docs/general-concepts/unityspriteconversion/)**.

**5. Enable/Disable Disclaimer Pages**

In the `Enable / Disable Disclaimer Pages` section, you can enable or disable various pages or disclaimers for your world or event. Choose the options that best suit your needs:
- World Welcome Page
- World Rules Page
- Flashing Lights Disclaimer Page
- Adult Only Disclaimer Page
- Avatar Performance Disclaimer Page

**6. Configure Advanced Settings**

In the `Advanced Settings` section, you can set various additional options:
- Whether the menu appears at the beginning of an instance.
- `Show at Spawn` - spawns the menu in front of the player upon the first time they join the instance.
- `Show at Location (Legacy)` - this legacy feature allows you to manually place the disclaimer menu somewhere in your world and it will show wherever you placed it directly.

The following options are for the `Show at Spawn` option only:
- `Distance of the Disclaimer from the Player's Face on Spawn` - this determines the distance of the menu from the player's face upon spawning in the instance.
- `Head Tracking for All Users` - this toggle enables the menu to consistently track the user's head, ensuring they don't miss the disclaimer. However, it might cause issues if the menu clips through walls or objects.
- `Head Tracking for Only VR Users` - this toggle enables head tracking specifically for VR users, ensuring they don't miss the disclaimer. However, it might cause issues if the menu clips through walls or objects.
- `Allow Avatar Resizing` - this toggle adjusts the scale of the menu according to the player's avatar size. While it requires more performance, it offers a significantly cleaner experience.

<br/><br/>

By following these steps, you can successfully install Hash Studios World Disclaimer and display important disclaimers or messages to players in your virtual world.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosworlddisclaimer)** or watch the **[YouTube Tutorial](https://youtu.be/IJUwJ2Yiqp8)**.
