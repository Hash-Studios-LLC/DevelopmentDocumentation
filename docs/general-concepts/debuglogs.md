---
title: Understanding Debug Logs in Unity  
sidebar_position: 12  
---

# Understanding Debug Logs in Unity  

:::warning  
**Version:** This guide is for Unity 2022.3.6f1. The steps may differ in future versions of Unity.  
:::  

:::tip
Many of our prefabs, including `Hash Studios Player Scanner [REVAMPED EDITION]`, use debug logs to help developers identify issues and understand what's happening in the background. These logs provide valuable insights into player detection and system events. However, in some cases, the amount of logging may be excessive, which can impact performance.

To ensure the best experience, please read this guide to learn how to manage, disable, or optimize debug logs for your project.
:::

<br/>   

Debug logs are an essential tool in Unity for diagnosing and understanding your game's behavior. They help developers track issues, monitor performance, and verify that their scripts function correctly.

This guide will cover:  
- What debug logs are and why they exist  
- How to disable debug logs in the Unity console  
- How to disable debug logs in scripts  
- Performance considerations when using debug logs  

<br/><br/>    

## What Are Debug Logs?  

Debug logs are messages that developers use to print information to Unity’s Console window. These messages help track the flow of execution, detect issues, and monitor variables during runtime.  

In Unity, debug logs are created using the `Debug.Log()` function:  

```csharp  
void Start()  
{  
    Debug.Log("This is a debug log message!");  
}  
```  

<br/>

### Types of Debug Logs  

Unity provides different types of debug logs:  

- **Standard Log:** `Debug.Log("Message");`  
- **Warning Log:** `Debug.LogWarning("Warning message");`  
- **Error Log:** `Debug.LogError("Error message");`  

These logs appear in different colors in the Console:  
- **Standard Logs** – White  
- **Warnings** – Yellow  
- **Errors** – Red  

![Unity Console showing different types of logs](/img/generalconcepts/typesoflogs.png)  

*Example of standard logs (white), warnings (yellow), and errors (red) in the Unity Console.*  

<br/> <br/>   

## Why Do Debug Logs Exist?  

Debug logs exist to help developers identify issues during game development. They are useful for:  

- Tracking variable values at runtime  
- Checking if a function is being called  
- Diagnosing errors and performance issues  
- Logging user interactions for debugging  

However, leaving debug logs active in a production build can negatively affect performance, as Unity still processes the logging system in the background.  

<br/> <br/>   

## How to Disable Debug Logs in Unity Console  

If you have too many debug messages cluttering your console, you can disable them using the **Console window buttons**.  

<br/>  

### Steps to Disable Debug Logs:  

1. Open the **Console Window** (Window → General → Console).  
2. At the top of the Console window, locate the three buttons:  
   - **Log (📄)** – Standard logs  
   - **Warning (⚠️)** – Warning messages  
   - **Error (❌)** – Error messages  
3. Click the **Log (📄)** button to disable standard debug logs.  
   - Clicking the button will gray it out, meaning standard logs won’t appear.  
4. (Optional) You can also disable warnings and errors by clicking their respective buttons.  

![Unity Console Buttons for Disabling Logs](/img/generalconcepts/howtohidedebuglogs.png)  

*Clicking these buttons will toggle the visibility of logs, warnings, and errors in the console.*  

:::tip  
Disabling logs in the console **does not** prevent them from running in the background. To completely remove them, you must disable them in the script.  
:::  

<br/>  <br/>  

## How to Disable Debug Logs in a Script  

If you want to prevent debug logs from running entirely, you can:  

<br/>  

### 1. **Comment Out Debug Logs**  

You can manually comment out debug log statements:  

```csharp  
void Update()  
{  
    // Debug.Log("This message will no longer print.");  
}  
```  

<br/>  <br/>  

## Debug Logs and Performance  

Excessive logging can slow down your game, especially in VR applications. This is because Unity processes log messages even if the Console window is closed.  

<br/>  

### Signs That Debug Logs Are Affecting Performance:  

- Your game stutters or lags in play mode.  
- The Console window floods with messages.  
- Frame rate drops when logging multiple messages per frame.  

![Example of Performance Drop Due to Excessive Logging](/img/generalconcepts/howtoseeprofiler.png)  

*Too many logs can cause performance issues. Check the profiler for bottlenecks.*  

<br/>  

### Recommendations:  

- **Upgrade your PC** if debugging tools cause performance issues.  

:::tip  
If debug logs are slowing down your game, consider upgrading your CPU and RAM. Logging large amounts of data, especially with multiple scripts running, can be resource-intensive.  
:::  

*Upgrading your hardware can improve performance if debugging tools are slowing down your project.*  

<br/> <br/>   

## Conclusion  

Debug logs are a powerful debugging tool in Unity, but they should be used wisely. Always disable unnecessary logs in production and optimize their usage to avoid performance issues.  

If you need further debugging tools, consider using Unity’s **Profiler** (`Window → Analysis → Profiler`) to analyze performance bottlenecks.  


