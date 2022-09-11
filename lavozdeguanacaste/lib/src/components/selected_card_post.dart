import 'package:flutter/material.dart';
import 'package:lavozdeguanacaste/src/components/banner_ads.dart';
import 'package:lavozdeguanacaste/src/components/card_post_01.dart';
import 'package:lavozdeguanacaste/src/components/card_post_02.dart';

import '../models/post_model.dart';

class SelectedCardPost extends StatelessWidget {
  final int index;
  final Posts post;
  const SelectedCardPost({Key? key, required this.index, required this.post})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    switch (index) {
      case 0:
        return Column(
          children: [
            CardPost01(post: post),
            const SizedBox(
              height: 10,
            ),
            BannerAds(
              ban: "banner01",
            )
          ],
        );
      case 1:
        return CardPost02(post: post);
      case 2:
        return CardPost02(post: post);
      case 3:
        return CardPost02(post: post);
      case 4:
        return CardPost02(post: post);
      case 5:
        return Column(
          children: [
            CardPost02(post: post),
            const SizedBox(
              height: 10,
            ),
            BannerAds(
              ban: "banner02",
            )
          ],
        );
      default:
        return Container();
    }
  }
}
