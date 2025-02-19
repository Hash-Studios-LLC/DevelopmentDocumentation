---
title: Hash Studios Music Player
sidebar_position: 10
---

# Installing Hash Studios Music Player

:::warning
**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.
:::

:::note
Hash Studios Music Player does not currently work with streaming or stream links.
:::

Introducing Hash Studios Music Player—a Unity Udon prefab designed to dynamically play music and adjust visual elements of the UI to match the color theme of the current song! 

This innovative music player offers a seamless integration of audio and visual aesthetics, allowing users to curate their music playlist and visually represent each song with its unique color theme.

<br/>

<div class="responsive-video">
  <iframe src="https://www.youtube.com/embed/gHWsjUATRqk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>

## Features

- Dynamic Color Matching
- Customizable Transparency
- Advanced Highlight Options
- User-Friendly Interface

<br/>

## VR Showcase World

Experience Hash Studios Music Player for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_3e6b4164-8eef-4173-ace1-989966a265e6)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

**1. Download and Import the Prefab**

1. Download Hash Studios Music Player from our **[website](https://www.hashstudiosllc.com/hashstudiosmusicplayer)**.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

<br/>

**2. Add the Prefab to Your World**

1. Drag Hash Studios Music Player into your world from the Project window.
2. Right-click on the prefab in the Hierarchy window and select `Prefab > Unpack Prefab`.

<br/>

**3. Configure Hash Studios Music Player**

1. Select Hash Studios Music Player in your Hierarchy.
2. In the Inspector window, you will see the configuration options for Hash Studios Music Player.

<br/>

**3. Edit the Music Playlist**

In the `Music Playlist` section, you can view all the songs you wish to display on the UI in your world:
   - `Element Index`: The index of the song. Starts at 0. Not too important unless it is somehow out of order.
   - `Song Name`: The name you want to display for the song when it's playing.
   - `Artist`: The artist name you want to display for the song when it's playing.
   - `Image to Display`: The image you want to display for the song when it's playing (looks like an area to put the album cover) (requires the image to be a sprite).
   
      :::tip
      For more detailed information on configuring images to sprites for the prefab, visit our [Adding Images and Creating Sprites Guide](/docs/general-concepts/unityspriteconversion/).
      :::

   - `Audio Clip (Song)`: The song to play when the song appears.
   - `Song Color`: The color theme to display when the song shows up.

<br/>

**4. Edit Highlight Options**

In the `Highlight Options` section, you can specify how the color theme of the song will affect the UI:

- `Text Color Change`: Enabling this means the song and artist names will appear in the song's color.
- `Button Color Change`: Enabling this means the menu buttons will adopt the song's color.
- `Shuffle Button Color Change`: Enabling this means the shuffle button on the menu will adopt the song's color when activated.
- `Slider Color Change`: Enabling this means the menu slider will adopt the song's color.
- `Background Color Change`: Enabling this means the menu background will adopt the song's color.
- `Background Color Transparency`: This determines the transparency of the background color to create contrast. Recommended: 15. Maximum is 255.

<br/><br/>

By following these steps, you can successfully install Hash Studios Music Player and dynamically play music while adjusting visual elements in the music UI to match the color theme of the current song.

For more detailed information and resources, visit the **[Official Website](https://www.hashstudiosllc.com/hashstudiosmusicplayer)** or watch the **[YouTube Tutorial](https://youtu.be/gHWsjUATRqk)**.
