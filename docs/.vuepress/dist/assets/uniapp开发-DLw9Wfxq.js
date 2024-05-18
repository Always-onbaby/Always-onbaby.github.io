const n=`#### 获取设备的 uuid

\`\`\`js
getDeviceUuid() {
    //#ifdef APP-PLUS
    var mainActivity = plus.android.runtimeMainActivity();
    var Settings = plus.android.importClass('android.provider.Settings');
    console.log('设备唯一标识为：', Settings.Secure.getString(mainActivity.getContentResolver(), Settings.Secure.ANDROID_ID));
    //#endif
},
\`\`\`
`;export{n as default};
