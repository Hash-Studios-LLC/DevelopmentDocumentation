---
title: Hash Studios Object Menu
sidebar_position: 10
---

# Installing Installing Hash Studios Object Menu

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

The Hash Studios Object Menu is a Unity Udon prefab designed to efficiently manage space in VR environments by allowing users to toggle objects on or off, ensuring a seamless and organized experience for everyone in the network. 

It is fully networked, ensuring that all changes are synchronized for every user in the world, enhancing the shared VR experience.

<br/>

## Features

- Fully Networked Functionality
- Customizable Text and Highlight Colors
- Supports Multiple Languages
- Easy Object Management with Add/Remove Options
- Seamless Integration with VR Environments

<br/>

## VR Showcase World

Experience Hash Studios Object Menu for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_2eb43dbd-9dfc-42cf-a611-999516e78eea)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download **Hash Studios Object Menu** from our **[website](https://www.hashstudiosllc.com/hashstudiosobjectmenu)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag **Hash Studios Object Menu** into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Select Hash Studios Object Menu**

1. Select **Hash Studios Object Menu** in your Hierarchy.
2. In the Inspector window, you will see the configuration options for **Hash Studios Object Menu**.

<br/>

**4. Menu Customization**

`Text for Menu` - This text is displayed on the menu to show whether the object is enabled or disabled. We offer English and Japanese, but you are free to choose any language you prefer.

:::important
**Note:** If you want to remove the second language, follow the instructions below.
<details>
<summary>Removing second language support</summary>

1. Open Internal Script:
   - Go to `Hash Studios Object Menu` > `Scripts` > `U_HashStudiosObjectMenu_Internal`.

2. Find the Code:
   - Locate the line `textToChange.text = "" + mainScript.disabledText_English + " | " + mainScript.disabledText_Japanese;` (currently, as of 06/15/2024, it is on line 85).

3. Change the Code:
   - Change the line to `textToChange.text = "" + mainScript.disabledText_English;`

Now only English text will display on the menu! (Note: This doesn't hide the Japanese text option from the inspector editor when editing the prefab.)

</details>
:::

<br/>

`Selected Highlight Color` - This is the color that will appear when an object is enabled.

<br/>

`List of GameObjects` - This is the list of game objects that will be toggled in the menu. Each object will have its own set of customization options:
- `Name (English)`: The text that will appear for the object (in English).
- `Name (Japanese)`: The text that will appear for the object (in Japanese).
- `Object to Enable`: The object in your Unity hierarchy that will be enabled or disabled when the object is selected.
- `Image to Display`: The image that will display when an object is shown (please check our guide on [changing images to sprites](/DevelopmentDocumentation/docs/general-concepts/unityspriteconversion/)).
:::tip
For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/DevelopmentDocumentation/docs/general-concepts/unityspriteconversion/).
:::

`Remove`: Removes the current object you are editing.

`Add New Element` - Adds a new object in the list.

`Remove Last Element` - Removes the last object in the list.

<br/>

`Update Dropdown Options` - This option will allow you to update the prefab so your current list correctly shows in the menu to save your changes.
:::warning
Modifying the options in the List of Game Objects without clicking `Apply` may cause this prefab to malfunction or behave unexpectedly.
:::

<br/><br/>

By following these steps, you can successfully install **Hash Studios Object Menu** and efficiently manage your VR environment with ease.

For more detailed information and resources, visit the **[Official Website](https://www.hashstudiosllc.com/hashstudiosobjectmenu)** or watch the **[YouTube Tutorial](https://www.youtube.com/watch?v=zncBYL0p7k8)**.
