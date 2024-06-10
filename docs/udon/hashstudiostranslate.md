---
title: Hash Studios Translate
sidebar_position: 8
---

# Installing Hash Studios Translate

Hash Studios Translate is a powerful and user-friendly translation tool, specifically designed for developers to effortlessly integrate multilingual support into their applications and projects. This guide will walk you through the installation process for Hash Studios Translate.

Elevate your application with Hash Studios Translate and provide a truly immersive multilingual experience for your users. Enhance accessibility, broaden your audience, and streamline the translation process with the user-friendly, customizable, and powerful HS Translate.

:::warning

**Version:** This guide is for Unity 2022.3.6f1. The steps may be different in future versions of Unity.

:::

:::warning

**Important:** Hash Studios Translate is NOT a translator. It is a tool that lets users add their OWN translations to texts in Unity. If you want to translate your text from one language to another, you must provide both translations of the text.

:::

<br/>

## Features

- Custom Editor Window to Control Translations
- Dynamic Support for Any Language of Your Choice
- Multiple UI Text Support:
  - General Text
  - TMP TextMesh
  - TMP TextMesh Pro
- Color Customization in Editor Window
- Translation Statistics
- Quest + PC Support
- Built-in Failure Prevention

<br/>

## VR Showcase World

Experience Hash Studios Translate for yourself here: **[VRChat Showcase World](https://vrchat.com/home/world/wrld_67f8dba5-bc0d-4e64-8967-387c4f334559)**

<br/>

## Requirements

You can learn how to set up your project beforehand at **[our project setup guide](/docs/general-concepts/settingupudon)**.

<br/>

## Installation Steps

### 1. Download and Import the Prefab

1. Download the Hash Studios Translate prefab from our website.
2. Import the prefab into your Unity project:
   - In Unity, go to `Assets` > `Import Package` > `Custom Package...`
   - Locate and select the downloaded prefab package.
   - Click `Import` to add the prefab to your project.

### 2. Open the Custom Editor Window

1. Go to `Tools` > `HS Translate` > `Management Panel`.
2. If you see a message that says you don't have the HS Translate prefab, click the button to automatically add the HS Translate prefab to your world.
   - *(Not recommended)* If you want a manual way of adding the prefab, simply go to the folder of the prefab and directly drop it in.

### 3. Position the Prefab Menu

1. Position the prefab menu to where you want it in your world.

### 4. Check Required Scripts

1. In the Management Panel, check that all the required scripts are visible in the `Relevant Scripts & Objects` section.

### 5. Customize UI

1. Customize the prefab's UI color, text color, transparency, and foreground, background, and banner to whatever you want.
2. To activate changes you made with the colors, click `Apply Changes` and either save the project, run it in the test mode, or run a VR test to update the changes in your project.

### 6. Configure Languages

1. In the `Control Prefab & Translation` section, modify the type, number, and sequence of languages in the `List of Languages` array.
2. Remember the index of each language for future steps (e.g., English at index 0, Japanese at index 1).

### 7. Set Multi-Lingual Font

1. For a text to support multiple languages, it needs a specific font that includes characters for those languages. We provide a TMP NotoSans font that supports many languages like Japanese, Chinese (Simplified & Traditional), and Greek characters.
2. This font is labeled as `NotoSans-Combined` in the Hash Studios Translate folder.
3. Under `Set Multi-Lingual Font For Text`, you can add your own custom language font or use the default one we provided for you called `NotoSans-Regular` (for legacy old text) and `NotoSans-Combined` (for TMP Text).
4. Click `Apply Changes`.

### 8. Translation Statistics

1. Translation statistics show how much of your world has translation in it.
2. You can open the `Translation Table` to see all the texts detected in your world and manually change them.
3. For each text it detects, it will show the text object, text font, translation status, text display, and an ability to view it in the Inspector.

### 9. Add Translations to Text

1. To add translation to text, either find it in the translation table or manually go to it in the Unity hierarchy.
2. Inspect the text object and add translated text to it by adding the HS Translate component.
3. In the `Language Translation` array, set each element to match the index of the language you want (e.g., index 0 for English text, index 1 for Japanese text).

### 10. Verify Translations

1. Now that you have set the text to be translatable with our component, you can view in the translation table that it should say it is now translatable ("WILL BE TRANSLATED") in green.

<br/><br/>

Some more advanced instructions, like how to make your own translation button instead of the preset we have, can be found in the **[video guide](https://www.youtube.com/watch?v=MgpKjftnJhw&t=38s)**.

<br/><br/>

By following these steps, you can successfully install Hash Studios Translate and provide a multilingual experience for your users.

For more detailed information and resources, visit the **[Official Website](https://hashstudiosllc.com/hashstudiostranslate)** or watch the **[YouTube Tutorial](https://www.youtube.com/watch?v=MgpKjftnJhw&t=38s)**.
