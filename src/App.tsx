import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Table, QuickToolbar, HtmlEditor, Inject } from '@syncfusion/ej2-react-richtexteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

class App extends React.Component {

  public customToolbarSettings : object = {
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'CreateTable','InsertCode']
  }; 
  rteObject ! : RichTextEditorComponent;
  public rteValue ! : string;
  getFormattedContent() {
    this.rteValue = this.rteObject.getHtml();
  }
  render() {
    return (
      <div>  
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
          
        </div> 
        <RichTextEditorComponent ref={(richtexteditor : RichTextEditorComponent)=> {this.rteObject=richtexteditor}}
        toolbarSettings={this.customToolbarSettings} placeholder="Type here..." >
          
        
          
          <Inject services = {[Toolbar, HtmlEditor, Table]}></Inject>
        </RichTextEditorComponent>
      </div>
    );
  }
}
   

export default App;



 
 
