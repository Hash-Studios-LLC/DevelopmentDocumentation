---
title: General Troubleshooting & Introduction
sidebar_position: 10
---

# Introduction to Troubleshooting

:::tip
**Stay Updated**: Always install the latest version of our prefabs. We update them regularly to fix bugs and add new features. Check our website or Discord for the latest releases.
:::

:::important
**Note:** Many of the issues you may encounter are likely due to limitations or bugs in Unity or the VRChat SDK, which we cannot fix or control. Our goal is to help you mitigate these issues as much as possible through guidance and support.
:::

<br/>

Working with Unity and local SDKs such as the VRChat SDK can sometimes be challenging. 

There are many factors involved that are beyond our control, and you may experience a variety of issues. This guide aims to help you troubleshoot any potential problems you may encounter.

Please follow along for any possible issues and make sure to check everything thoroughly.

<br/>

## General Troubleshooting Tips

1. **Ensure Unity and SDKs are Up-to-Date**: Make sure you are using the latest versions of Unity and any SDKs you are working with.

2. **Check for Common Issues**: Look for common issues that other users may have faced. Often, the problem you are encountering has been solved before and **[can be found on Google](#using-the-console-in-unity)**.

3. **Follow Setup Guides**: Ensure that you have followed all setup guides and installation instructions accurately. Refer to our **[project setup guide](/docs/general-concepts/settingupudon)** here.

4. **Review Documentation**: Go through the documentation provided with any prefabs or assets you are using to ensure correct usage.

5. **Test in a Clean Project**: Sometimes, starting with a clean project and importing only the necessary assets can help identify conflicts or issues.

6. **Consult Community Forums and Discord**: The community can be a great resource. Check community forums and our **[Discord server](https://discord.gg/78EnuECcY4)** for additional help.

<br/>

## Setting Up a New Scene in Your Project

1. **Open Unity / VCC and Create a New Project**: 
   - Launch Unity or VCC from your desktop or Start menu.
   - Create a new project or open an existing one.

2. **Create a New Scene**:
   - In the Project window (usually at the bottom of the screen), right-click on the `Assets` folder.
   - Select `Create` > `Scene` from the context menu.
   - Name the new scene (e.g., `MyNewScene`).
   - Double-click on the new scene to open it.

<br/>

## Using the Console in Unity

The Console is an essential tool for identifying and debugging issues in Unity.

1. **Opening the Console**:
   - At the top of the Unity interface, click on `Window`.
   - From the dropdown menu, select `General` and then `Console`.
   - The Console window will appear, showing logs, warnings, and errors.

2. **Understanding Console Messages**:
   - **Logs**: These are general messages that tell you what is happening in your project.
   - **Warnings**: These are alerts about potential issues that might not break your project but could cause problems.
   - **Errors**: These are serious issues that need to be fixed. Your project may not work correctly until these are resolved.

3. **Googling Error Messages**:
   - Click on the error message in the Console to highlight it.
   - Right-click and select `Copy`.
   - Open your web browser and go to a search engine like Google.
   - Paste the error message into the search bar, adding the word "Unity" at the beginning.
   - Look through the search results for forums, Unity's official documentation, or other sources that might have a solution.

<br/>

## Identifying Prefab-Specific Issues

If you see an error with our prefab name in it, such as `HASH STUDIOS ADMIN BAN MENU: Toggle was not found!`, it is likely a problem with that prefab.

1. **Check Documentation**: Refer to the documentation for that specific prefab to ensure you have followed all instructions correctly.
2. **View Example Scenes:** Refer to our [example scene](#using-example-scenes) for the prefab in your Unity project
3. **Common Errors and Fixes**: Look for a section in the documentation that addresses common errors and how to fix them.

Make sure you study the general concepts we provided here: **[General Concepts](/docs/category/general-concepts/)**

<br/>

## Using Example Scenes

Each of our prefabs comes with an example scene. These example scenes are designed to help you see how the prefab should function in a fully configured environment. Here’s how you can make the most of these example scenes:

1. **Locate the Example Scene**:
   - When you download and import one of our prefabs, the example scene is typically included in the package.
   - In the Project window, navigate to the folder where the prefab package is located. Look for a folder named `Examples` or similar.

2. **Open the Example Scene**:
   - Double-click on the example scene to open it in Unity.
   - This scene is pre-configured with the prefab set up correctly, allowing you to see how it works out-of-the-box.

3. **Test the Prefab**:
   - Play the example scene to observe how the prefab functions. This can help you understand its features and how it interacts with other components.
   - Experiment with the prefab in the example scene to get a feel for its capabilities.

4. **Copy to Your Project**:
   - If the example scene setup is more complex or complete than what you have in your project, you can copy elements from the example scene into your own scene.
   - Select the prefab or components in the example scene’s Hierarchy window.
   - Right-click and choose `Copy`, then paste them into your project’s scene.

5. **Adjust for Your Needs**:
   - Once you’ve copied the necessary elements into your project, you can adjust and configure them to fit your specific needs.
   - Make sure to test the setup thoroughly to ensure everything works as expected.

Using the provided example scenes can save you time and help you avoid common setup issues by providing a working reference implementation.

<br/>

## Submitting a Bug Report

If you can't seem to find a similar issue and you think the problem you have is related to our prefabs, please submit a bug report on our **[Discord server](https://discord.gg/78EnuECcY4)**.

:::important
**Please Note:** If it is not a problem with our prefabs, please refrain from sending it as a bug report.
:::

<br/>

## Patreon Support

We offer direct and faster support to our Patreon supporters. By supporting us on Patreon, you can gain access to priority assistance and additional resources. Visit our **[Patreon page](https://www.patreon.com/HashStudiosLLC)** for more information.

<br/><br/>

By following these steps and guidelines, you can effectively troubleshoot and resolve most issues. If the problem persists and is related to our prefabs, our support team will assist you further on our Discord server.

For more detailed information and resources, visit our **[Official Website](https://hashstudiosllc.com)**.
