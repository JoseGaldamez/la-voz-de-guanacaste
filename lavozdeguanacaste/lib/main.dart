import 'package:flutter/material.dart';
import 'package:lavozdeguanacaste/src/pages/home_page.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.yellow,
        ),
        title: 'La voz de Guanacaste',
        // ignore: prefer_const_constructors
        home: HomePage());
  }
}
