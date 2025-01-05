---
title: Hash Studios Alcohol Drinks
sidebar_position: 10
---

# Hash Studios Alcohol Drinks

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

Hash Studios Alcohol Drinks is a Unity Udon prefab for VRChat worlds that allows players to craft drinks, experience drunkenness, and customize effects for a fun and immersive experience. It features detailed mechanics for mixing drinks, applying unique visual effects, and handling player states like drunkenness and blackouts.

<br/>

:::warning
**Disclaimer:** 
While this prefab simulates the effects of alcohol in a virtual environment, please remember to consume alcohol responsibly in real life. Overdrinking can have serious health consequences. Always ensure you stay hydrated with water and prioritize your safety and well-being.
:::

<br/>

![Example GIF](/img/productshowcases/AlcoholSystemTeaser3.gif)

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/S4cJssCjRP8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

<div class="image75">
   
   ![Example GIF](/img/producteditors/hs_alc_drink_2.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_3.png)

</div>

<br/>

## Features

- Craft drinks using a variety of ingredients.
- Unique drink effects based on the ingredients and mix accuracy.
- Visual and gameplay effects as players consume alcohol, including blur, wave intensity, and chromatic aberration.
- Blackout mechanics after excessive drinking, including teleportation to recovery zones.
- Size-based alcohol tolerance system for different character scales.
- Configurable drunkenness duration and blackout recovery time.
- A sober drink option to instantly remove drunkenness.
- Performance-optimized drink despawning.
- Highly customizable visual effects and respawn settings.

<br/>

## Tons of Drinks!

<div class="image25-left">
   
   ![Example GIF](/img/producteditors/hs_alc_drink_4.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_5.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_6.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_7.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_8.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_9.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_10.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_11.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_12.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_13.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_14.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_15.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_16.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_17.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_18.png)
   ![Example GIF](/img/producteditors/hs_alc_drink_19.png)

</div>

<br/>

## VR Showcase World

Experience Hash Studios Alcohol Drinks for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_262ca9d3-4a76-423b-b347-d8b1b876259c)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Alcohol Drinks from our **[website](https://hashstudiosllc.com/hashstudiosalcoholdrinks)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Alcohol Drinks into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure the Prefab**

<div class="image25-left">
   
   ![Example GIF](/img/producteditors/hs_alc_drink_20.jpg)
   ![Example GIF](/img/producteditors/hs_alc_drink_21.jpg)
   ![Example GIF](/img/producteditors/hs_alc_drink_22.jpg)
   ![Example GIF](/img/producteditors/hs_alc_drink_23.jpg)
   ![Example GIF](/img/producteditors/hs_alc_drink_24.jpg)

</div>

The following table lists the configurable fields for Hash Studios Alcohol Drinks in the Unity Inspector:

| **Category**       | **Field Name**                 | **Description**                                                                                                                                 | **Default Value**        |
|---------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **General Settings** | Drunk Duration               | Time a player stays drunk before starting to recover.                                                                                          | `30.0 seconds`          |
|                     | Drunkenness Build-Up Time    | Time it takes to reach a blackout after exceeding alcohol tolerance.                                                                           | `10.0 seconds`          |
|                     | Temporary Respawn Location   | Quiet location where players are temporarily teleported during a blackout.                                                                     | -                        |
|                     | Player Respawn Point         | Final location where players are returned after recovery.                                                                                      | -                        |
|                     | Drink Sound Effect           | Audio clip that plays when a player consumes a drink.                                                                                          | -                        |
| **Blackout Settings**| Fade Effect Duration         | Time for the screen to fade to black during a blackout.                                                                                        | `15.0 seconds`          |
|                     | Respawn Delay               | Time players remain fainted before respawning.                                                                                                 | `5.0 seconds`           |
|                     | Text Fade Time              | Duration for on-screen text to disappear.                                                                                                      | `3.0 seconds`           |
|                     | Canvas Display Distance     | Distance of UI elements from the player.                                                                                                       | `2.5`                   |
| **Customization Settings** | Maximum Wave Frequency    | Maximum frequency of the wavy screen effect at peak drunkenness.                                                                               | `3.0 Hz`                |
|                     | Maximum Wave Amplitude      | Intensity of the wavy effect at peak drunkenness.                                                                                              | `0.07`                  |
|                     | Maximum Wave Speed          | Speed of the wavy effect at peak drunkenness.                                                                                                  | `0.2`                   |
|                     | Maximum Blur Strength       | Intensity of blur effect at peak intoxication.                                                                                                 | `0.03`                  |
|                     | Maximum Chromatic Aberration | Intensity of chromatic aberration at peak drunkenness.                                                                                         | `0.1`                   |
|                     | Alcohol Tolerance Modifier  | Multiplier adjusting alcohol tolerance based on character size.                                                                                | `10`                    |
|                     | Audio Effect Modifier       | Multiplier adjusting sound effects based on drunkenness level.                                                                                 | `1.0`                   |
| **Advanced Settings**| Drink Spawn Location         | Position where drinks appear when created.                                                                                                     | -                        |
|                     | Sound Player               | Location where drink-related sounds are played (e.g., pouring, drinking).                                                                      | -                        |
|                     | Drink Mixer Script          | Custom script controlling drink mixing logic.                                                                                                  | -                        |

<br/>

1. Select Hash Studios Alcohol Drinks in your Hierarchy.
2. In the Inspector window, you will find the configuration options:
   - Adjust drunkenness settings such as duration and visual effects.
   - Customize blackout recovery locations and timings.
   - Set ingredient requirements and drink recipes.

<br/>

**4. Finalize Your Setup**

1. Place the spawn location for drinks, trash bins for disposal, and recovery zones.
2. Test your scene to ensure that drink crafting, consumption, and effects behave as expected.

<br/><br/>

By following these steps, you can successfully integrate Hash Studios Alcohol Drinks into your VRChat world, providing a fun and interactive drinking simulation.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiosalcoholdrinks)** or watch the **[YouTube Tutorial](https://youtube.com/tutoriallink)**.
