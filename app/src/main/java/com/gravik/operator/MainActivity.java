package com.gravik.operator;
import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;
import android.net.Uri;
public class MainActivity extends Activity {
 private WebView webView;
 @Override protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  getWindow().setStatusBarColor(Color.rgb(5,5,5));
  getWindow().setNavigationBarColor(Color.rgb(5,5,5));
  webView=new WebView(this); webView.setBackgroundColor(Color.rgb(5,5,5)); setContentView(webView);
  WebSettings s=webView.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setAllowFileAccess(true); s.setAllowContentAccess(false); s.setAllowFileAccessFromFileURLs(false); s.setAllowUniversalAccessFromFileURLs(false); s.setSupportZoom(false); s.setBuiltInZoomControls(false); s.setDisplayZoomControls(false);
  webView.setWebViewClient(new WebViewClient(){
   @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request){ Uri u=request.getUrl(); return !("file".equals(u.getScheme()) && "android_asset".equals(u.getHost())); }
   @Override public boolean shouldOverrideUrlLoading(WebView view, String url){ return !url.startsWith("file:///android_asset/"); }
  }); webView.loadUrl("file:///android_asset/index.html");
 }
 @Override public void onBackPressed(){ if(webView!=null){ webView.evaluateJavascript("(function(){if(typeof goBack==='function'&&stack&&stack.length){goBack();return 'handled'}return 'exit'})()",v->{if("\"exit\"".equals(v)) MainActivity.super.onBackPressed();}); } else super.onBackPressed(); }
 @Override protected void onDestroy(){ if(webView!=null){webView.destroy();webView=null;} super.onDestroy(); }
}