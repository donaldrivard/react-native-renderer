import {Component, ElementRef, ViewChild} from '@angular/core';
import {StyleSheet} from 'react-native';
import {WebView as WebViewAndroid} from 'angular2-react-native/android';
import {WebView as WebViewIOS} from 'angular2-react-native/ios';

@Component({
  selector: 'webview-app',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  template: `
<View [style]="{flexDirection: 'row', flex: 1}">
  <View [styleSheet]="styles.button" rippleFeedback (tap)="goBack()">
    <Text [styleSheet]="styles.buttonText">Back</Text>
  </View>
  <View [styleSheet]="styles.button" rippleFeedback (tap)="goForward()">
    <Text [styleSheet]="styles.buttonText">Forward</Text>
  </View>
</View>
<WebView [source]="{uri: 'https://www.angular.io'}" javaScriptEnabled="true" domStorageEnabled="true" automaticallyAdjustContentInsets="false" [style]="{flex: 11}">
</WebView>
`
})
export class WebViewApp {
  @ViewChild(WebViewAndroid) webViewAndroid: WebViewAndroid;
  @ViewChild(WebViewIOS) webViewIOS: WebViewIOS;
  styles: any;
  _el : any = null;
  constructor(el: ElementRef) {
    this._el = el.nativeElement;
    this.styles = StyleSheet.create({
      button: {
        padding: 5,
        margin: 5,
        backgroundColor: '#005eb8',
        flex: 1
      },
      buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 15
      }
    });
  }

  goBack() {
    if (this.webViewAndroid) this.webViewAndroid.goBack();
    if (this.webViewIOS) this.webViewIOS.goBack();
  }

  goForward() {
    if (this.webViewAndroid) this.webViewAndroid.goForward();
    if (this.webViewIOS) this.webViewIOS.goForward();
  }
}

