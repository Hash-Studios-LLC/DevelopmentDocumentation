---
title: Multi-Language Support with Fonts in Unity 2019
sidebar_position: 4
---

# Multi-Language Support with Fonts in Unity 2019

:::warning

**Font Limitation:** As of 06/10/2024, you cannot dynamically change fonts within Udon scripts in Unity 2019 or Unity 2022. Therefore, you need to set up font switching manually.

:::

:::tip 

Our prefab, Hash Studios Translate, allows you to manage translations and font assignments effectively. For more information, refer to [Hash Studios Translate](https://hashstudiosllc.com/hashstudiostranslate).

:::

Supporting multiple languages in Unity involves ensuring that the chosen fonts can display the necessary characters for each language. This guide will walk you through the process of implementing multi-language support with fonts in Unity 2019.

<br/>

## Unity Text and Fonts

Unity Text components and TextMesh Pro (TMP) components are used to display text in Unity. For multi-language support, it’s crucial to choose fonts that cover the full range of characters required for each language.

<br/>

### Key Points about Unity Text and Fonts:

- **Text Components:** Standard text components used in Unity.
- **TextMesh Pro:** Advanced text components providing better text rendering and font asset management.
- **Fonts:** Ensure that your fonts include characters for all supported languages.

For more detailed information on Unity Text and TextMesh Pro, refer to the [Unity TextMesh Pro Documentation](https://docs.unity3d.com/Packages/com.unity.textmeshpro@2.1/manual/index.html).

<br/>

## Step-by-Step Guide: Implementing Multi-Language Support

**1. Install TextMesh Pro (TMP)**

1. Open your Unity project.
2. Go to `Window` > `Package Manager`.
3. Search for `TextMesh Pro` and install it if it's not already installed.

**2. Choose Appropriate Fonts**

For a text to support multiple languages, it needs a specific font that includes characters for those languages. We provide a TMP NotoSans font that supports many languages like Japanese, Chinese (Simplified & Traditional), and Greek characters. This font is labeled as `NotoSans-Combined` in the Hash Studios Translate folder.

**3. Import Fonts into Unity**

1. Download the required font files.
2. Drag and drop the font files into your Unity project's `Assets` folder.

**4. Create Font Assets with TextMesh Pro**

1. In the Project window, select the font you imported.
2. Right-click on the font and select `Create` > `TextMeshPro` > `Font Asset`.
3. This will create a new TMP font asset that can be used with TextMesh Pro components.

**5. Set Up Text Components**

1. Replace all standard `Text` components with `TextMeshPro - Text` components.
2. Assign the created TMP font assets to these `TextMeshPro` components.
   - Select the `TextMeshPro` component in the Inspector.
   - Under `Font Asset`, assign the appropriate TMP font asset.

<br/>

### Best Practices

- **Font Selection:** Choose fonts that cover the widest range of characters for the languages you need.
- **TextMesh Pro:** Use TextMesh Pro for better text rendering and font asset management.
- **Localization Management:** Use a centralized script or manager to handle language switching and text updates.
- **Testing:** Thoroughly test your project with different languages to ensure that all characters display correctly.

<br/><br/>

By following these steps and best practices, you can successfully implement multi-language support with fonts in Unity 2019, providing an inclusive and accessible experience for your users.

For more detailed information and resources, refer to the [Unity TextMesh Pro Documentation](https://docs.unity3d.com/Packages/com.unity.textmeshpro@2.1/manual/index.html).
