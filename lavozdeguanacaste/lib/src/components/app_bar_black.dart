import 'package:flutter/material.dart';

class AppBarBlack extends StatelessWidget {
  const AppBarBlack({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.black,
      title: Image.asset(
        'assets/logo-lavoz.png',
        height: 45,
      ),
    );
  }
}
