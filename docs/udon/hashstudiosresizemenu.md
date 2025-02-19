---
title: Hash Studios Resize Menu
sidebar_position: 10
---

# Installing Hash Studios Resize Menu

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing the Hash Studios Resize Menu—a revolutionary Udon Unity prefab that enhances the UdonSharp experience by empowering users to adjust their avatar size easily! 

This tool is a game-changer for UdonSharp worlds, allowing players on both VR and PC to seamlessly change their avatar's size. It offers a user-friendly process for size adjustment, giving players the freedom to experiment with their avatar’s scale within the limits set by the world creator.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/FyIw63syZCo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- **Avatar Size Customization**
  - Allows users to alter their avatar size within a range specified by the world creator.

- **VR and PC Compatibility**
  - Accessible and functional for players on both platforms.

- **User-Friendly Menu**
  - Easy to use, with options to summon or disable the menu based on the world creator’s settings.

- **Customizable Menu Settings**
  - Options like following the player's head view.

- **Adjustable Player Settings**
  - Includes size-speed correlation, size limits, and speed multipliers.

- **Flexible Input Settings**
  - Customizable summoning options for VR and PC platforms.

<br/>

## VR Showcase World

Experience the Hash Studios Resize Menu for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_83c057ae-edeb-47c7-94b0-1ca4321ca490?backLink=%2Fhome%2Fworld%2Fwrld_83c057ae-edeb-47c7-94b0-1ca4321ca490)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Resize Menu from our **[website](https://www.hashstudiosllc.com/hashstudiosresizemenu)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Resize Menu into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure the Resize Menu**

1. Select Hash Studios Resize Menu in your Hierarchy.
2. In the Inspector window, you will see the configuration options for the Resize Menu.

<br/>

**4. Edit Menu Settings**

Within the `Menu Settings`, you can customize whether and how the menu appears when summoned by the player. This includes options like whether the menu follows the player's head. Typically, these settings can be turned on or off based on how you want players to resize in your world.
- `Teleport to Player` - Enable if the menu should teleport to the player's current location when summoned. (WARNING: Disabling also disables summoning inputs) (default: on)
- `Adapt Menu Size to Player Size` - Toggle this to have the menu adjust based on the player's avatar height (default: on)

<br/>

**5. Edit Player Settings**

In the `Player Settings`, you can adjust various aspects of the menu related to the player. This includes whether their size affects their speed, setting the maximum or minimum size limits for players, and determining the multiplier for running speed compared to walking speed.
- `Change Player Speed with Size` - If enabled, player speed scales with avatar size (default: on)
- `Running Speed Multiplier` - Determines the multiplier for running speed relative to walking speed. A value of 2 means running is twice as fast as walking (default: 2)
- `Minimum Player Size` - Set the smallest allowable size for a player's avatar in the world. Limit: minimum size must stay at or above 0.1 (recommended: 0.1)
- `Maximum Player Size` - Set the largest allowable size for a player's avatar in the world. Limit: maximum size must stay at or below 100 (recommended: 100)

<br/>

**6. Edit Input Settings**

In the `Input Settings`, you can customize the way players summon the menu or choose not to allow summoning at all. If summoning is disabled, the menu can just be placed somewhere in the world. Various options are available, depending on the player's platform.

For PC players, the Input Settings offer several options: you can disable the menu summoning entirely, enable it with a specific keyboard button, or allow summoning and size changing with different keyboard buttons.
- `No PC Input`
- `Spawn PC Input`
  - `Summon Key` - Sets the keyboard key to summon the menu. Select a key that allows for easy and quick menu access (default: k).
- `Button and Size PC Input`
  - `Summon Key` - Sets the keyboard key to summon the menu. Select a key that allows for easy and quick menu access (default: k).
  - `PC Shrink Key` - Assigns a keyboard key to decrease avatar size. This key will reduce the avatar's size in increments. Choose a convenient key for easy avatar scaling down (default: m).
  - `PC Grow Key` - Designates a keyboard key to increase avatar size. Pressing this key will enlarge the avatar incrementally. Set a specific key for intuitive and rapid resizing (default: i).

For VR players, the Input Settings offer various choices: you can opt for no menu summoning, enable summoning with a flick in a specific direction on the right-controller joystick, set it to require a double flick in a direction on the right controller joystick, or configure it so players can’t summon the menu but can change their size by flicking the right controller's joystick up or down.
- `No VR Input` - Disables menu summoning entirely.
- `Size-Based VR Input` - Allows players to adjust their avatar size directly using the joystick, without summoning the menu.
- `VR Joystick Input Up` - Summons the menu with a single flick up on the right-controller joystick.
- `VR Joystick Input Down` - Summons the menu with a single flick down on the right-controller joystick.
- `VR Joystick Input Up (Double Tap)` - Summons the menu with a double flick up on the right-controller joystick.
- `VR Joystick Input Down (Double Tap)` - Summons the menu with a double flick down on the right-controller joystick.

<br/><br/>

By following these steps, you can successfully install Hash Studios Resize Menu and enjoy a seamless avatar resizing experience in your UdonSharp worlds.

For more detailed information and resources, visit the **[Official Website](https://www.hashstudiosllc.com/hashstudiosresizemenu)** or watch the **[YouTube Tutorial](https://youtu.be/FyIw63syZCo)**.
