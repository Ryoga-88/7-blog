interface ProjectCard {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}

export const getProjectCards: ProjectCard[] = [
  {
    title: "Word-of-Mouth Travel Navigator",
    description:
      "本システムは、ユーザ間の嗜好の類似性に基づき、未評価の旅行先に対する評価値を推定する協調フィルタリングを応用し、個々のユーザに特化したお薦めアイテムを探索する仕組みです。『自分と好みが似ている人が高評価している場所を教えてもらう』というくちこみ効果（Word of Mouth）をコンピュータ上で再現し、多数のユーザが評価したデータ行列から欠測値を推定するための理論や技術を探求しています。",
    imageSrc: "/img/navigator.jpg",
    // link: "https://www.youtube.com/?app=desktop&hl=ja",
  },
  {
    title: "Data Mining with a Focus on Ambiguity",
    description:
      "本研究は、ファジィ理論やラフ集合理論に基づくソフトコンピューティング手法を活用し、人間のあいまいさを反映したデータマイニングおよび知識発見に取り組みます。ビッグデータ時代において、膨大なデータを自動的に分類するクラスタリング技術の必要性が高まる中、分類のあいまいさや不確実性を考慮することで、より柔軟で信頼性の高い分類手法の実現を目指しています。",
    imageSrc: "/img/datamining.png",
    link: "https://www.youtube.com/?app=desktop&hl=ja",
  },
  {
    title: "Learning Algorithms Inspired by Human Cognition",
    description:
      "近年の学習アルゴリズムは、人間の学習枠組みを情報学的に洗練することで進化してきました。本研究では、認知的視点を取り入れたアプローチにより、従来の手法に改良を加えて効率的な学習プロセスの実現を探求します。神経細胞を模した要素がS字の迷路を進む様子に着目し、あいまいさをうまく活用することで、より効果的な学習方法の構築を目指しています。",
    imageSrc: "/img/algorithms.png",
    link: "https://www.youtube.com/?app=desktop&hl=ja",
  },
];
