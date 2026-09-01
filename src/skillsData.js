/**
 * Centralized Skill Arsenal Data Structure
 * Easily add, remove, or edit skills and categories here.
 */

export const skillCategories = [
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    emoji: "☁️",
    skills: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Amazon EC2",
        icon: "https://api.iconify.design/logos:aws-ec2.svg"
      },
      {
        name: "Amazon S3",
        icon: "https://api.iconify.design/logos:aws-s3.svg"
      },
      {
        name: "Amazon RDS",
        icon: "https://api.iconify.design/logos:aws-rds.svg"
      },
      {
        name: "Amazon VPC",
        icon: "https://api.iconify.design/logos:aws-vpc.svg"
      },
      {
        name: "AWS IAM",
        icon: "https://api.iconify.design/logos:aws-iam.svg"
      },
      {
        name: "AWS CloudWatch",
        icon: "https://api.iconify.design/logos:aws-cloudwatch.svg"
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      },
      {
        name: "Networking",
        icon: "https://api.iconify.design/lucide:network.svg?color=%237657F5"
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
      },
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
      }
    ]
  },

  {
    id: "cicd-version-control",
    title: "CI/CD & Version Control",
    emoji: "🔄",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
      },
      {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      },
      {
        name: "ArgoCD",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg"
      }
    ]
  },
  {
    id: "configuration-automation",
    title: "Configuration & Automation",
    emoji: "⚙️",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Shell Scripting",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
      },
      {
        name: "Ansible",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"
      }
    ]
  },
  {
    id: "monitoring-logging",
    title: "Monitoring & Logging",
    emoji: "📊",
    skills: [
      {
        name: "Prometheus",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
      },
      {
        name: "Grafana",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
      },
      {
        name: "AWS CloudWatch",
        icon: "https://api.iconify.design/logos:aws-cloudwatch.svg"
      }
    ]
  },
  {
    id: "databases-querying",
    title: "Databases & Querying",
    emoji: "🗄️",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg"
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      }
    ]
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    emoji: "🤝",
    skills: [
      {
        name: "Leadership",
        icon: "https://api.iconify.design/lucide:crown.svg?color=%237657F5"
      },
      {
        name: "Problem-Solving",
        icon: "https://api.iconify.design/lucide:puzzle.svg?color=%237657F5"
      },
      {
        name: "Communication",
        icon: "https://api.iconify.design/lucide:message-square.svg?color=%237657F5"
      },
      {
        name: "Team Collaboration",
        icon: "https://api.iconify.design/lucide:users.svg?color=%237657F5"
      }
    ]
  }
];

export const fallbackSvgIcon = `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237657F5%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M12%202L2%207l10%205%2010-5-10-5zM2%2017l10%205%2010-5M2%2012l10%205%2010-5%22%2F%3E%3C%2Fsvg%3E`;
