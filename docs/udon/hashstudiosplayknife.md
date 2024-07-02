---
title: Hash Studios Play Knife
sidebar_position: 10
---

# Installing Hash Studios Play Knife

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Introducing Hash Studios Play Knife—the ultimate fun tool for your virtual hangouts!

Ever felt the need to spice up your VRChat sessions with friends? Look no further! Hash Studios Play Knife is a unique Udon prefab that lets you 'stab' your friends in a playful, non-violent way and watch them hilariously respawn at customized locations. Perfect for games, pranks, or just relieving boredom, this tool adds an exciting twist to your virtual adventures.

With Hash Studios Play Knife, you can set your own respawn points, ensuring your friends come back to life exactly where you want them. Customize the sounds for death, hitting, slashing, and pulling out the knife to match your style. The immersive stab particle effect and adjustable stab cooldown add even more layers of fun and interactivity. Thanks to network sync, everyone in the session stays in sync for a seamless experience.

Whether you're looking to create fun mini-games or simply want to add a playful element to your hangouts, Hash Studios Play Knife is the perfect addition to your VRChat toolkit. Just stab, respawn, and repeat for endless entertainment!

<br/>

![Example GIF](/img/productshowcases/knifestab.gif)

<br/>

## Features

- Audio Sounds & Settings for Death, Hitting, Slashing, and Pull-Out
- Stab Particle Effect
- Stab Cooldown
- Customizable Respawn Location
- Network Sync

<br/>

## VR Showcase World

Experience Hash Studios Play Knife for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_dc42303d-1d51-4abd-b4eb-0377d110144d)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## How to Use

1. Grab the knife.
2. Stab your friend!
3. Watch whatever attached particle system appears when you stab them!
4. See them respawn.
5. Stab them again after the cooldown ends!

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Play Knife from our **[website](https://hashstudiosllc.com/hashstudiosplayknife)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Play Knife into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Select Hash Studios Play Knife**

![Example GIF](/img/producteditors/nb-HSplayknife-main.png)

1. Select Hash Studios Play Knife in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Play Knife.

<br/>

**4. Edit Customization Settings**

![Example GIF](/img/producteditors/nb-HSplayknife-customizationknife.png)

In the Customization Settings, you can customize settings of the knife:

- **Cooldown** - Float of the time interval between each successful stab action. Default: 2. Please don't set anything lower than 0.
- **Particle System** - This is the particle effect that will appear when someone is stabbed.
- **Play Effect Length** - Duration of the particle effect until respawn.
- **Respawn Location** - This is the area that a player will respawn when they are stabbed.

<br/>

**5. Edit Audio Settings**

![Example GIF](/img/producteditors/nb-HSplayknife-audio.png)

In the Audio Settings, you can customize the audio of the knife:

- **Death Sound Clip** - Sound played when a player gets hit with the knife and 'dies'.
- **Stab Sound Clip** - Sound that plays when a knife stabs and misses the player.
- **Slash Sound Clip** - Sound that plays when the knife slashes anything.
- **Knife Out Clip** - Sound that plays when the knife gets held by someone.

<br/>