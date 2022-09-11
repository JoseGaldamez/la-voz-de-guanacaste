import 'package:flutter/material.dart';
import 'package:lavozdeguanacaste/src/components/list_posts.dart';
import 'package:lavozdeguanacaste/src/components/app_bar_black.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      appBar: PreferredSize(
          preferredSize: Size.fromHeight(60), child: AppBarBlack()),
      body: ListOfPost(),
    );
  }
}
