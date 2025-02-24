import 'package:markdown/markdown.dart' as m;
import 'package:flutter/material.dart';

class WidgetConfig {
  WidgetBuilder p;
  WidgetBuilder pre;
  WidgetBuilder ul;
  WidgetBuilder ol;
  WidgetBuilder block;
  WidgetBuilder hr;
  WidgetBuilder table;

  WidgetConfig({
    this.p,
    this.pre,
    this.ul,
    this.ol,
    this.block,
    this.hr,
    this.table,
  });
}

typedef Widget WidgetBuilder(m.Element node);
