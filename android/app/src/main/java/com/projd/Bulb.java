package com.projd;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class Bulb extends ReactContextBaseJavaModule  {
    private static Boolean isOn = false;
    private static Boolean err = false;
    public Bulb(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void setInitStatus(Boolean isOn, Callback successCallback, Callback failureCallback) {
        isOn = isOn;
        if(isOn)
        System.out.println("Init status of Bulb is ON");
        else
        System.out.println("Init status of Bulb is OFF");
        if (err==true){
            failureCallback.invoke(null,"There is err in Native module!");
            err=false;
        }
        else{
            successCallback.invoke(null,isOn);
        }
    }

    @ReactMethod
    public void newToggle(Callback successCallback, Callback failureCallback) {
        isOn = !isOn;
        if(isOn) {
            System.out.println("Bulb is turn ON");
        }
        else {
            System.out.println("Bulb is turn OFF");
        }
        if (err==true) {
            failureCallback.invoke(null, "There is err in Native module!");
            err=false;
        }
        else {
            successCallback.invoke(null,isOn);
        }
    }

    @Override
    public String getName() {
        return "Bulb";
    }

}
