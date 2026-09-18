package com.gravik.operator;
import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
public class MainActivity extends Activity {
 private WebView webView;
 @Override protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  getWindow().setStatusBarColor(Color.rgb(5,5,5));
  getWindow().setNavigationBarColor(Color.rgb(5,5,5));
  webView=new WebView(this); webView.setBackgroundColor(Color.rgb(5,5,5)); setContentView(webView);
  WebSettings s=webView.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setAllowFileAccess(true); s.setAllowContentAccess(false); s.setSupportZoom(false);
  webView.setWebViewClient(new WebViewClient()); webView.loadUrl("file:///android_asset/index.html");
 }
 @Override public void onBackPressed(){ if(webView!=null&&webView.canGoBack()) webView.goBack(); else super.onBackPressed(); }
 @Override protected void onDestroy(){ if(webView!=null){webView.destroy();webView=null;} super.onDestroy(); }
}